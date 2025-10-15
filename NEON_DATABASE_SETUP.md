# 🐘 Neon Database Setup Guide

## What is Neon?
Neon is a **serverless PostgreSQL** database that's perfect for modern web applications. It offers:
- ✅ **Free tier** with generous limits
- ✅ **Auto-scaling** - only pay for what you use
- ✅ **Instant setup** - database ready in 30 seconds
- ✅ **Branching** - create database branches like Git
- ✅ **Built-in connection pooling**

---

## 🚀 **Step-by-Step Setup**

### **Step 1: Create Neon Account**

1. **Visit Neon Console**: https://console.neon.tech/
2. **Sign up options**:
   - Sign up with GitHub (recommended)
   - Sign up with Google
   - Sign up with email

![Neon Signup](https://docs.neon.tech/docs/get-started-with-neon/signup.png)

### **Step 2: Create Your First Project**

1. **After signup**, you'll see the project creation screen
2. **Fill in details**:
   - **Project name**: `WholesaleConnect` or `wholesale-marketplace`
   - **Database name**: `wholesale_db` (or keep default)
   - **Region**: Choose closest to your users
     - `US East (N. Virginia)` - Good for global
     - `EU (Ireland)` - For European users
     - `Asia Pacific (Singapore)` - For Asian users

3. **Click "Create Project"**

### **Step 3: Get Your Database Connection String**

1. **In your project dashboard**, click on **"Connection Details"**
2. **You'll see connection string like**:
   ```
   postgresql://username:password@ep-cool-darkness-123456.us-east-1.aws.neon.tech/dbname?sslmode=require
   ```

3. **Copy this entire string** - you'll need it for your app

### **Step 4: Configure Your Application**

#### **Option A: Update your .env file**
```bash
# Open your .env file
# Replace the DATABASE_URL with your Neon connection string

DATABASE_URL="postgresql://username:password@ep-cool-darkness-123456.us-east-1.aws.neon.tech/dbname?sslmode=require"
NODE_ENV=development
PORT=5000
```

#### **Option B: Set environment variable directly**
```bash
export DATABASE_URL="postgresql://username:password@ep-cool-darkness-123456.us-east-1.aws.neon.tech/dbname?sslmode=require"
```

### **Step 5: Test Database Connection**

```bash
cd /Users/prasum/Desktop/WholesaleConnect

# Push your schema to the database
npm run db:push

# If successful, you'll see:
# ✅ Schema pushed successfully
```

### **Step 6: Verify Connection**

```bash
# Start your development server
npm run dev

# Check if the app connects to database
# Look for any database-related errors in the console
```

---

## 🎯 **Neon Dashboard Overview**

### **Main Dashboard Features:**

1. **Branches** - Create database branches for testing
2. **Monitoring** - CPU, memory, storage usage
3. **Settings** - Project configuration
4. **Integrations** - Connect with Vercel, Netlify, etc.

### **Connection Details Section:**
- **Connection string** - Full database URL
- **Host** - Database host address
- **Database** - Database name
- **Username** - Database username
- **Password** - Database password (hidden by default)

---

## ⚙️ **Advanced Configuration**

### **Connection Pooling (Recommended)**

Neon provides built-in connection pooling. For better performance, use the pooled connection:

```bash
# Instead of direct connection, use pooled:
DATABASE_URL="postgresql://username:password@ep-cool-darkness-123456-pooler.us-east-1.aws.neon.tech/dbname?sslmode=require"
```

### **SSL Configuration**

Neon requires SSL by default. Your connection string should include:
- `?sslmode=require` at the end
- Or `?ssl=true` for some drivers

### **Database Branching**

Create branches for different environments:

1. **Main branch** - Production data
2. **Dev branch** - Development/testing
3. **Preview branches** - For feature testing

---

## 🆓 **Free Tier Limits**

Neon's free tier includes:
- **512 MB** storage
- **1 database**
- **10 hours** of compute per month
- **Auto-pause** after 5 minutes of inactivity
- **Auto-resume** on first query

**Tips to stay within limits:**
- Database auto-pauses when not in use
- Only active queries consume compute time
- Storage includes data + indexes

---

## 🔧 **Troubleshooting**

### **Common Issues:**

#### **Connection Timeout**
```bash
# Error: connection timeout
# Solution: Check if your IP is allowed
```
**Fix**: Neon allows all IPs by default, but check firewall settings

#### **SSL Certificate Error**
```bash
# Error: SSL certificate verify failed
# Solution: Ensure ?sslmode=require in connection string
```

#### **Database Not Found**
```bash
# Error: database "dbname" does not exist
# Solution: Check database name in connection string matches created database
```

#### **Authentication Failed**
```bash
# Error: authentication failed for user
# Solution: Regenerate database password in Neon dashboard
```

### **Debug Steps:**

1. **Verify connection string format**:
   ```
   postgresql://[username]:[password]@[host]/[database]?sslmode=require
   ```

2. **Test connection manually**:
   ```bash
   # Using psql (if installed)
   psql "postgresql://username:password@host/database?sslmode=require"
   ```

3. **Check Neon dashboard** for connection status and errors

---

## 🔄 **Database Schema Migration**

### **Initial Setup:**
```bash
# Push your schema to Neon
npm run db:push

# This will create tables based on your schema.ts file
```

### **Schema Updates:**
```bash
# After making changes to shared/schema.ts
npm run db:push

# Drizzle will show you the changes and ask for confirmation
```

---

## 🌟 **Production Setup**

### **Environment Variables for Deployment:**

```bash
# For Vercel deployment
DATABASE_URL=postgresql://username:password@ep-cool-darkness-123456-pooler.us-east-1.aws.neon.tech/dbname?sslmode=require

# For other platforms
DATABASE_URL=postgresql://username:password@ep-cool-darkness-123456.us-east-1.aws.neon.tech/dbname?sslmode=require
NODE_ENV=production
```

### **Best Practices:**

1. **Use connection pooling** for production
2. **Enable auto-pause** to save compute credits
3. **Monitor usage** in Neon dashboard
4. **Create branches** for staging/testing
5. **Regular backups** (Neon has automatic backups)

---

## 📊 **Monitoring Your Database**

### **Neon Dashboard Metrics:**
- **CPU usage** - Query performance
- **Memory usage** - Connection load
- **Storage usage** - Data size
- **Connection count** - Active connections

### **Query Performance:**
- Use Neon's query insights
- Monitor slow queries
- Optimize indexes as needed

---

## 🎯 **Integration with Your App**

### **Your Current Setup:**

Your app uses:
- **Drizzle ORM** for database operations
- **Neon serverless driver** for connections
- **Schema definition** in `shared/schema.ts`

### **Connection Flow:**
```
Your App → Drizzle ORM → Neon Driver → Neon Database
```

### **Key Files:**
- `shared/schema.ts` - Database schema
- `server/db.ts` - Database connection
- `drizzle.config.ts` - Migration configuration

---

## 🚀 **Quick Start Commands**

```bash
# 1. Set up environment
echo 'DATABASE_URL="your-neon-connection-string"' >> .env

# 2. Push schema to database
npm run db:push

# 3. Start development server
npm run dev

# 4. Test the connection
curl http://localhost:5000/api/health
```

---

## 🆘 **Need Help?**

### **Resources:**
- **Neon Documentation**: https://neon.tech/docs
- **Neon Discord**: https://discord.gg/92vNTzKDGp
- **Drizzle + Neon Guide**: https://neon.tech/docs/guides/drizzle

### **Support Channels:**
- Neon support chat (in dashboard)
- Community Discord
- GitHub issues for technical problems

---

## ✅ **Verification Checklist**

After setup, verify:
- [ ] Neon account created
- [ ] Project created with database
- [ ] Connection string copied
- [ ] DATABASE_URL set in .env
- [ ] `npm run db:push` successful
- [ ] App starts without database errors
- [ ] Can create/read data in your app

---

Your Neon database is now ready for your WholesaleConnect application! 🎉

The database will automatically scale with your app and pause when not in use, making it perfect for development and production.