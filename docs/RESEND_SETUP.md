# 📧 Resend API Setup Guide

This document explains how to configure the Resend API for the contact form functionality.

## 🔑 Required GitHub Secret

The application requires the following secret to be configured in GitHub:

- **`RESEND_API_KEY`** - Your Resend API key

## 📝 Setup Instructions

### Step 1: Get Your Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign in to your account
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Give it a name (e.g., "Portfolio Production")
6. Copy the generated API key

### Step 2: Add Secret to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Enter the following:
   - **Name:** `RESEND_API_KEY`
   - **Secret:** Paste your API key from Step 1
5. Click **Add secret**

### Step 3: Verify Domain in Resend

1. In Resend dashboard, go to **Domains**
2. Add your domain: `dxbmark.com`
3. Follow the DNS configuration instructions
4. Wait for verification (usually takes a few minutes)
5. Ensure the status shows **"Verified"**

## ✅ Automated Verification

We have an automated workflow that checks your Resend API configuration:

### Manual Check
Run the workflow manually:
1. Go to **Actions** tab
2. Select **"Check Resend API Connection"**
3. Click **"Run workflow"**

### Automatic Checks
The workflow runs automatically:
- ✅ On every push to `main` that affects email functionality
- ✅ Weekly on Sundays at midnight (UTC)

### What It Checks
- ✅ API key exists in GitHub Secrets
- ✅ API key is valid and active
- ✅ Domain `dxbmark.com` is configured
- ✅ Domain verification status
- ✅ Sends a test email (optional)

## 🚨 Troubleshooting

### Issue: "Failed to send message"

**Possible causes:**
1. ❌ `RESEND_API_KEY` not set in GitHub Secrets
2. ❌ Invalid or expired API key
3. ❌ Domain not verified in Resend
4. ❌ Rate limit exceeded

**Solutions:**
1. Check GitHub Actions logs for detailed error messages
2. Verify the secret is correctly set in GitHub
3. Ensure domain is verified in Resend dashboard
4. Check Resend dashboard for any account issues

### Issue: Workflow Fails

If the automated check fails, an issue will be automatically created in the repository with details about the problem.

## 📊 Monitoring

### GitHub Actions Summary
After each workflow run, check the **Summary** tab for:
- API Key Status
- Connection Test Results
- Domain Verification Status
- Timestamp of last check

### Email Logs
Check Resend dashboard for:
- Email delivery status
- Bounce rates
- Error logs

## 🔒 Security Notes

- ✅ Never commit API keys to the repository
- ✅ Use GitHub Secrets for all sensitive data
- ✅ Rotate API keys periodically
- ✅ Monitor API usage in Resend dashboard
- ✅ Set up rate limiting if needed

## 📧 Email Configuration

### Admin Notification Email
- **From:** `DXBMark <info@dxbmark.com>`
- **To:** `info@dxbmark.com`, `tariq.yousef@outlook.com`
- **Reply-To:** Client's email address

### Client Confirmation Email
- **From:** `DXBMark <noreply@dxbmark.com>`
- **To:** Client's email address
- **Subject:** "Thank You for Contacting Us - Message Received"

## 🔗 Useful Links

- [Resend Dashboard](https://resend.com/overview)
- [Resend API Documentation](https://resend.com/docs)
- [Resend API Keys](https://resend.com/api-keys)
- [Resend Domains](https://resend.com/domains)

## 📞 Support

If you encounter any issues:
1. Check the automated workflow logs
2. Review Resend dashboard for errors
3. Verify all DNS records are correctly configured
4. Contact Resend support if needed

---

**Last Updated:** 2025-10-18
**Maintained by:** Tariq Said
