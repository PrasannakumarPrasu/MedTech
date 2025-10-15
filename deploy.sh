#!/bin/bash

# 🚀 WholesaleConnect Deployment Script
# This script helps you deploy your application to various platforms

set -e

echo "🚀 WholesaleConnect Deployment Helper"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in the right directory
check_directory() {
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root directory."
        exit 1
    fi
    print_status "Found package.json - we're in the right directory"
}

# Install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    if npm ci; then
        print_status "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Build the application
build_application() {
    print_info "Building application..."
    if npm run build; then
        print_status "Application built successfully"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Test the build
test_build() {
    print_info "Testing the build..."
    if npm run preview &; then
        sleep 5
        if curl -f http://localhost:5000 > /dev/null 2>&1; then
            print_status "Build test passed"
            pkill -f "npm run preview" || true
        else
            print_warning "Build test inconclusive - server might not be responding"
            pkill -f "npm run preview" || true
        fi
    else
        print_warning "Could not start preview server for testing"
    fi
}

# Git operations
prepare_git() {
    print_info "Preparing Git repository..."
    
    # Check if git is initialized
    if [ ! -d ".git" ]; then
        print_info "Initializing Git repository..."
        git init
    fi
    
    # Add all files
    git add .
    
    # Check if there are changes to commit
    if git diff --staged --quiet; then
        print_info "No changes to commit"
    else
        print_info "Committing changes..."
        git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
        print_status "Changes committed"
    fi
}

# Environment variable check
check_env_vars() {
    print_info "Checking environment variables..."
    
    if [ -f ".env" ]; then
        print_status "Found .env file"
        print_warning "Remember to set these variables in your deployment platform:"
        grep -v '^#' .env | grep -v '^$' | sed 's/=.*/=***/' || true
    else
        print_warning "No .env file found. Make sure to set environment variables in your deployment platform."
    fi
}

# Deployment platform selection
select_platform() {
    echo ""
    print_info "Select deployment platform:"
    echo "1) Vercel (Recommended)"
    echo "2) Netlify"
    echo "3) Railway"
    echo "4) Render"
    echo "5) Docker (Local)"
    echo "6) Manual deployment info"
    echo ""
    
    read -p "Enter your choice (1-6): " choice
    
    case $choice in
        1)
            deploy_vercel
            ;;
        2)
            deploy_netlify
            ;;
        3)
            deploy_railway
            ;;
        4)
            deploy_render
            ;;
        5)
            deploy_docker
            ;;
        6)
            show_manual_info
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
}

# Vercel deployment
deploy_vercel() {
    print_info "Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        print_info "Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    print_info "Starting Vercel deployment..."
    print_warning "Follow the prompts to configure your deployment"
    
    vercel --prod
    
    print_status "Vercel deployment initiated!"
    print_info "Your app will be available at the URL provided by Vercel"
}

# Netlify deployment
deploy_netlify() {
    print_info "Setting up Netlify deployment..."
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        print_info "Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    print_info "Starting Netlify deployment..."
    netlify deploy --prod --dir=dist/public
    
    print_status "Netlify deployment initiated!"
}

# Railway deployment
deploy_railway() {
    print_info "Setting up Railway deployment..."
    
    # Check if Railway CLI is installed
    if ! command -v railway &> /dev/null; then
        print_info "Installing Railway CLI..."
        npm install -g @railway/cli
    fi
    
    print_info "Starting Railway deployment..."
    railway login
    railway deploy
    
    print_status "Railway deployment initiated!"
}

# Render deployment
deploy_render() {
    print_info "Render deployment setup..."
    print_info "For Render deployment:"
    echo "1. Push your code to GitHub"
    echo "2. Go to https://render.com"
    echo "3. Connect your GitHub repository"
    echo "4. Set build command: npm run build"
    echo "5. Set start command: npm start"
    echo "6. Add environment variables"
    
    print_warning "Manual setup required on Render dashboard"
}

# Docker deployment
deploy_docker() {
    print_info "Building Docker image..."
    
    if docker build -t wholesale-connect .; then
        print_status "Docker image built successfully"
        
        print_info "Starting Docker container..."
        docker run -p 5000:5000 --env-file .env wholesale-connect
    else
        print_error "Docker build failed"
        exit 1
    fi
}

# Manual deployment info
show_manual_info() {
    print_info "Manual Deployment Information:"
    echo ""
    echo "📁 Built files location: ./dist/"
    echo "🌐 Client files: ./dist/public/"
    echo "⚙️  Server files: ./dist/index.js"
    echo ""
    echo "📋 Required environment variables:"
    check_env_vars
    echo ""
    echo "🚀 To deploy manually:"
    echo "1. Upload built files to your server"
    echo "2. Set environment variables"
    echo "3. Run: npm start"
    echo ""
    print_info "See DEPLOYMENT_GUIDE.md for detailed instructions"
}

# Main deployment flow
main() {
    echo "Starting deployment process..."
    echo ""
    
    check_directory
    install_dependencies
    build_application
    test_build
    prepare_git
    check_env_vars
    select_platform
    
    echo ""
    print_status "Deployment process completed!"
    print_info "Check your deployment platform for the live URL"
    echo ""
    print_info "Need help? Check the DEPLOYMENT_GUIDE.md file"
}

# Run main function
main