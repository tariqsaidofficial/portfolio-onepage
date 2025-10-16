# SMTP Configuration for Contact Form

This portfolio uses nodemailer to send emails from the contact form to your email addresses.

## Required Environment Variables

Add these environment variables to your Vercel project or `.env.local` file:

\`\`\`env
# SMTP Configuration for dxbmark.com domain
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@dxbmark.com
SMTP_PASSWORD=your-smtp-password
SMTP_FROM=noreply@dxbmark.com
\`\`\`

## Common SMTP Providers

### Gmail (for testing)
\`\`\`env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
\`\`\`

### SendGrid
\`\`\`env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
\`\`\`

### AWS SES
\`\`\`env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-ses-smtp-username
SMTP_PASSWORD=your-ses-smtp-password
\`\`\`

### Custom Domain (Recommended for dxbmark.com)
Contact your domain hosting provider (e.g., GoDaddy, Namecheap, Cloudflare) to get SMTP credentials for your domain.

## Email Recipients

The contact form sends emails to:
- info@dxbmark.com
- tariq.yousef@outlook.com

## Testing

1. Add the environment variables to your Vercel project
2. Deploy or run locally with `npm run dev`
3. Test the contact form
4. Check both email addresses for the message

## Security Notes

- Never commit `.env.local` to git
- Use app-specific passwords for Gmail
- Consider using a dedicated email service like SendGrid or AWS SES for production
- The SMTP password should be kept secure in Vercel environment variables
