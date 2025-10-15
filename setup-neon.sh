#!/bin/bash

# 🐘 Neon Database Setup Helper Script
# This script helps you set up and test your Neon database connection

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to print colored output
print_header() {
    echo -e "${PURPLE}🐘 $1${NC}"
    echo "=================================="
}

print_success() {
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

print_step() {
    echo -e "${YELLOW}📋 Step $1: $2${NC}"
}

# Main setup function
setup_neon_database() {
    print_header "Neon Database Setup Helper"
    echo ""
    
    print_step "1" "Account Creation"
    echo "1. Open your browser and go to: https://console.neon.tech/"
    echo "2. Click 'Sign up' and choose one of these options:"
    echo "   - Sign up with GitHub (recommended)"
    echo "   - Sign up with Google" 
    echo "   - Sign up with email"
    echo ""
    read -p "Press Enter after you've created your Neon account..."
    
    print_step "2" "Project Creation"
    echo "1. You should now see 'Create your first project' screen"
    echo "2. Fill in the details:"
    echo "   - Project name: WholesaleConnect"
    echo "   - Database name: wholesale_db (or keep default)"
    echo "   - Region: Choose closest to your location"
    echo "     • US East (N. Virginia) - Good for global"
    echo "     • EU (Ireland) - For European users"  
    echo "     • Asia Pacific (Singapore) - For Asian users"
    echo "3. Click 'Create Project'"
    echo ""
    read -p "Press Enter after you've created your project..."
    
    print_step "3" "Get Connection String"
    echo "1. In your project dashboard, look for 'Connection Details'"
    echo "2. You'll see a connection string that looks like:"
    echo "   postgresql://username:password@ep-xxxxx.region.aws.neon.tech/dbname?sslmode=require"
    echo "3. Copy this ENTIRE string"
    echo ""
    echo "Please paste your Neon connection string below:"
    read -p "DATABASE_URL: " database_url
    
    if [ -z "$database_url" ]; then
        print_error "No connection string provided. Please run the script again."
        exit 1
    fi
    
    # Validate the connection string format
    if [[ $database_url == postgresql://* ]]; then
        print_success "Connection string format looks correct"
    else
        print_warning "Connection string format might be incorrect. Make sure it starts with 'postgresql://'"
    fi
    
    print_step "4" "Update Environment File"
    
    # Backup existing .env if it exists
    if [ -f ".env" ]; then
        cp .env .env.backup
        print_info "Backed up existing .env to .env.backup"
    fi
    
    # Update or create .env file
    if grep -q "DATABASE_URL" .env 2>/dev/null; then
        # Replace existing DATABASE_URL
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            sed -i '' "s|DATABASE_URL=.*|DATABASE_URL=\"$database_url\"|" .env
        else
            # Linux
            sed -i "s|DATABASE_URL=.*|DATABASE_URL=\"$database_url\"|" .env
        fi
        print_success "Updated DATABASE_URL in existing .env file"
    else
        # Add DATABASE_URL to .env
        echo "DATABASE_URL=\"$database_url\"" >> .env
        echo "NODE_ENV=development" >> .env
        echo "PORT=5000" >> .env
        print_success "Created .env file with database configuration"
    fi
    
    print_step "5" "Test Database Connection"
    
    print_info "Installing dependencies..."
    if npm install; then
        print_success "Dependencies installed"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
    
    print_info "Testing database connection by pushing schema..."
    if npm run db:push; then
        print_success "Database connection successful! Schema pushed to Neon."
    else
        print_error "Database connection failed. Please check your connection string."
        echo ""
        print_info "Common issues:"
        echo "1. Make sure the connection string is complete"
        echo "2. Verify the database name is correct"
        echo "3. Check if the password contains special characters (may need escaping)"
        exit 1
    fi
    
    print_step "6" "Start Development Server"
    
    print_info "Starting development server to test everything..."
    echo "The server will start on http://localhost:5000"
    echo "Press Ctrl+C to stop the server when you're done testing"
    echo ""
    read -p "Press Enter to start the server..."
    
    npm run dev
}

# Function to show connection details  
show_connection_info() {
    print_header "Database Connection Information"
    
    if [ -f ".env" ] && grep -q "DATABASE_URL" .env; then
        echo "✅ Environment file (.env) exists with DATABASE_URL"
        echo ""
        echo "📋 Your configuration:"
        echo "   Environment file: .env"
        grep "DATABASE_URL\|NODE_ENV\|PORT" .env | sed 's/DATABASE_URL=.*/DATABASE_URL=***[HIDDEN]***/'
        echo ""
        
        print_info "To test your connection:"
        echo "   npm run db:push    # Push schema to database"
        echo "   npm run dev        # Start development server"
    else
        print_warning "No .env file found or DATABASE_URL not configured"
        echo "Run this script to set up your database connection"
    fi
}

# Function to reset database
reset_database() {
    print_warning "Database Reset"
    echo "This will recreate all tables in your database."
    echo "⚠️  ALL DATA WILL BE LOST!"
    echo ""
    read -p "Are you sure you want to continue? (y/N): " confirm
    
    if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
        print_info "Resetting database..."
        if npm run db:push; then
            print_success "Database reset complete"
        else
            print_error "Database reset failed"
        fi
    else
        print_info "Database reset cancelled"
    fi
}

# Main menu
show_menu() {
    echo ""
    print_header "Neon Database Helper Menu"
    echo "1) Set up new Neon database connection"
    echo "2) Show current connection info"
    echo "3) Test database connection"
    echo "4) Reset database (recreate tables)"
    echo "5) View Neon setup guide"
    echo "6) Exit"
    echo ""
}

# Handle menu selection
handle_menu() {
    read -p "Select an option (1-6): " choice
    
    case $choice in
        1)
            setup_neon_database
            ;;
        2)
            show_connection_info
            ;;
        3)
            print_info "Testing database connection..."
            if npm run db:push; then
                print_success "Database connection test passed!"
            else
                print_error "Database connection test failed!"
            fi
            ;;
        4)
            reset_database
            ;;
        5)
            print_info "Opening Neon setup guide..."
            if command -v open &> /dev/null; then
                open NEON_DATABASE_SETUP.md
            elif command -v xdg-open &> /dev/null; then
                xdg-open NEON_DATABASE_SETUP.md
            else
                print_info "Please open NEON_DATABASE_SETUP.md in your text editor"
            fi
            ;;
        6)
            print_info "Goodbye!"
            exit 0
            ;;
        *)
            print_error "Invalid option. Please select 1-6."
            ;;
    esac
}

# Main execution
main() {
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    while true; do
        show_menu
        handle_menu
        echo ""
        read -p "Press Enter to continue..."
    done
}

# Run main function
main