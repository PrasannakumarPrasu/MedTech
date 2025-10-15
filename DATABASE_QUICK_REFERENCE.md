# 🔧 Database Quick Reference

## 🚀 **Quick Setup Commands**

```bash
# 1. Run interactive setup helper
./setup-neon.sh

# 2. Manual setup
echo 'DATABASE_URL="your-neon-connection-string"' >> .env
npm run db:push
npm run dev
```

---

## 🐘 **Neon Connection String Format**

```bash
# Standard format:
postgresql://username:password@host:5432/database?sslmode=require

# Example:
postgresql://alex:abc123@ep-cool-darkness-123456.us-east-1.aws.neon.tech/neondb?sslmode=require

# With connection pooling (recommended for production):
postgresql://alex:abc123@ep-cool-darkness-123456-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
```

---

## ⚙️ **Database Commands**

| Command | Purpose | Usage |
|---------|---------|-------|
| `npm run db:push` | Push schema changes | After modifying `shared/schema.ts` |
| `npm run dev` | Start with DB | Development server with database |
| `./setup-neon.sh` | Interactive setup | Guided database configuration |

---

## 🔍 **Troubleshooting**

### **Connection Issues:**

| Error | Solution |
|-------|----------|
| `Connection timeout` | Check internet connection, verify host |
| `SSL certificate error` | Ensure `?sslmode=require` in URL |
| `Authentication failed` | Verify username/password in connection string |
| `Database not found` | Check database name matches Neon dashboard |

### **Quick Fixes:**

```bash
# Test connection
npm run db:push

# Reset database
./setup-neon.sh
# Choose option 4: Reset database

# Check environment
cat .env | grep DATABASE_URL
```

---

## 📊 **Neon Dashboard Quick Guide**

### **Key Sections:**
1. **Overview** - Usage metrics, storage, compute
2. **Branches** - Create dev/staging branches  
3. **Monitoring** - Performance metrics
4. **Settings** - Connection details, integrations

### **Important URLs:**
- **Main Console**: https://console.neon.tech/
- **Documentation**: https://neon.tech/docs
- **Status Page**: https://status.neon.tech/

---

## 🎯 **Environment Variables**

### **Development (.env):**
```bash
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
NODE_ENV=development
PORT=5000
```

### **Production (Deployment Platform):**
```bash
DATABASE_URL="postgresql://user:pass@host-pooler/db?sslmode=require"
NODE_ENV=production
```

---

## 🔄 **Schema Management**

### **Your Schema File:**
`shared/schema.ts` - Define your database tables

### **Apply Changes:**
```bash
# After editing schema.ts
npm run db:push

# Drizzle will show you:
# - What tables will be created/modified
# - Ask for confirmation
# - Apply changes to Neon database
```

### **Current Schema:**
```typescript
// Your current tables:
- users (id, username, password)
// Add more tables by editing shared/schema.ts
```

---

## 💡 **Pro Tips**

### **Development:**
- Use database branching for feature testing
- Auto-pause saves compute credits
- Monitor usage in Neon dashboard

### **Production:**
- Use pooled connection (`-pooler` in host)
- Set up monitoring alerts
- Enable automatic backups

### **Performance:**
- Add indexes for frequently queried columns
- Use connection pooling
- Monitor slow queries in dashboard

---

## 🆘 **Get Help**

### **Instant Help:**
```bash
# Run interactive helper
./setup-neon.sh

# View detailed guide  
open NEON_DATABASE_SETUP.md
```

### **Support Channels:**
- **Neon Discord**: https://discord.gg/92vNTzKDGp
- **Documentation**: https://neon.tech/docs
- **Support Chat**: Available in Neon dashboard

---

## ✅ **Success Checklist**

After setup, you should have:
- [ ] Neon account created
- [ ] Project with database created  
- [ ] Connection string copied
- [ ] `.env` file updated with `DATABASE_URL`
- [ ] `npm run db:push` works without errors
- [ ] `npm run dev` starts server successfully
- [ ] No database connection errors in console

**🎉 Your database is ready!**