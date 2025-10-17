// Cloudflare Pages Function for sending emails
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Tariq Said <info@dxbmark.com>',
        to: ['info@dxbmark.com', 'tariq.yousef@outlook.com'],
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: #ffffff;">
          
          <!-- Header -->
          <tr>
            <td style="background: #0a122c; padding: 30px 20px; text-align: center;">
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 50px; margin-bottom: 15px;" />
              <h1 style="color: #e11d48; margin: 0; font-size: 24px; font-weight: normal;">New Contact Form Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">
              <p style="margin: 0 0 10px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Name:</strong><br/>
                ${name}
              </p>
              
              <p style="margin: 0 0 10px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Email:</strong><br/>
                <a href="mailto:${email}" style="color: #e11d48; text-decoration: none;">${email}</a>
              </p>
              
              <p style="margin: 0 0 20px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Phone:</strong><br/>
                <a href="tel:${phone}" style="color: #e11d48; text-decoration: none;">${phone}</a>
              </p>
              
              <p style="margin: 0 0 10px 0; color: #0a122c; font-size: 15px; font-weight: bold;">Message:</p>
              <p style="white-space: pre-wrap; color: #333; line-height: 1.6; margin: 0; font-size: 15px;">${message}</p>
              
              <p style="margin: 20px 0 0 0; color: #666; font-size: 14px;">
                Best regards,<br/>
                John
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #0a122c; padding: 25px 20px; text-align: center;">
              <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
              <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Tariq Said. All rights reserved.</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `
      })
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Send confirmation email to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Tariq Said <noreply@dxbmark.com>',
        to: [email],
        subject: 'Thank you for contacting Tariq Said',
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received Successfully</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: #ffffff;">
          
          <!-- Header -->
          <tr>
            <td style="background: #0a122c; padding: 30px 20px; text-align: center;">
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 50px; margin-bottom: 15px;" />
              <h1 style="color: #e11d48; margin: 0; font-size: 24px; font-weight: normal;">Message Received Successfully</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 15px 0;">
                Dear <strong>${name}</strong>,
              </p>
              
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for reaching out to us! We have successfully received your message and will get back to you as soon as possible.
              </p>
              
              <div style="border-left: 4px solid #e11d48; padding-left: 15px; margin: 20px 0;">
                <p style="margin: 0 0 5px 0; color: #0a122c; font-size: 14px; font-weight: bold;">Your Message:</p>
                <p style="white-space: pre-wrap; color: #666; line-height: 1.6; margin: 0; font-size: 14px;">${message}</p>
              </div>
              
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 20px 0 15px 0;">
                We typically respond within 24-48 hours. If you need immediate assistance, please feel free to contact us directly at:
              </p>
              
              <p style="margin: 0 0 5px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Email:</strong> <a href="mailto:info@dxbmark.com" style="color: #e11d48; text-decoration: none;">info@dxbmark.com</a>
              </p>
              
              <p style="margin: 0 0 20px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Phone:</strong> <a href="tel:+971501234567" style="color: #e11d48; text-decoration: none;">+971 50 123 4567</a>
              </p>
              
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0;">
                Thank you for choosing us!
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #0a122c; padding: 25px 20px; text-align: center;">
              <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
              <p style="color: #64748b; margin: 0 0 12px 0; font-size: 12px;">© ${new Date().getFullYear()} Tariq Said. All rights reserved.</p>
              <p style="color: #64748b; margin: 0; font-size: 11px;">
                This is an automated message from <strong>noreply@dxbmark.com</strong>. Please do not reply to this email.<br/>
                For support, contact us at <a href="mailto:info@dxbmark.com" style="color: #e11d48; text-decoration: none;">info@dxbmark.com</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `
      })
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
