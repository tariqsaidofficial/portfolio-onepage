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
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0a122c 0%, #1e293b 100%); padding: 40px 30px; text-align: center;">
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 60px; margin-bottom: 20px;" />
              <h1 style="color: #e11d48; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">📬 New Message Received</h1>
              <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">Someone wants to connect with you</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Contact Info Card -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 24px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="display: inline-block; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">👤 Name</span>
                          <p style="margin: 4px 0 0 0; color: #0f172a; font-size: 16px; font-weight: 600;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-top: 1px solid #e2e8f0;">
                          <span style="display: inline-block; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">✉️ Email</span>
                          <p style="margin: 4px 0 0 0;"><a href="mailto:${email}" style="color: #e11d48; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a></p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-top: 1px solid #e2e8f0;">
                          <span style="display: inline-block; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📱 Phone</span>
                          <p style="margin: 4px 0 0 0;"><a href="tel:${phone}" style="color: #e11d48; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message Card -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 12px; border: 2px solid #e2e8f0;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 18px; font-weight: 700; display: flex; align-items: center;">
                      <span style="display: inline-block; width: 32px; height: 32px; background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); border-radius: 8px; text-align: center; line-height: 32px; margin-right: 12px;">💬</span>
                      Message
                    </h2>
                    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #e11d48;">
                      <p style="white-space: pre-wrap; color: #334155; line-height: 1.7; margin: 0; font-size: 15px;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Quick Actions -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 32px;">
                <tr>
                  <td align="center">
                    <table role="presentation" style="border-collapse: collapse;">
                      <tr>
                        <td style="padding: 0 8px;">
                          <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(225, 29, 72, 0.3);">Reply via Email</a>
                        </td>
                        <td style="padding: 0 8px;">
                          <a href="tel:${phone}" style="display: inline-block; padding: 14px 28px; background: #f1f5f9; color: #0f172a; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; border: 2px solid #e2e8f0;">Call Now</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #0a122c 0%, #1e293b 100%); padding: 32px 30px; text-align: center;">
              <p style="color: #e11d48; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; font-style: italic; letter-spacing: 0.5px;">Code. Create. Deliver.</p>
              
              <!-- Social Media Icons -->
              <table role="presentation" style="margin: 20px auto; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://github.com/tariqsaidofficial" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/in/tariqsaidofficial/" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.behance.net/tariqsaidofficial" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none;">
                      <svg width="20" height="20" viewBox="1 1 22 22" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"><path d="M20.3331 7.66665H14.4998V6H20.3331V7.66665ZM21.7714 15.9999C21.4031 17.0807 20.0806 18.4999 17.5206 18.4999C14.959 18.4999 12.884 17.059 12.884 13.7707C12.884 10.5125 14.8215 8.83747 17.439 8.83747C20.0073 8.83747 21.5756 10.3225 21.9181 12.5258C21.9831 12.9474 22.0089 13.5158 21.9973 14.3091H15.3082C15.4165 16.9849 18.2106 17.069 19.1315 15.9999H21.7714ZM15.3665 12.6666H19.5039C19.4164 11.3774 18.5573 10.8174 17.4398 10.8174C16.2181 10.8174 15.5423 11.4574 15.3665 12.6666ZM7.38824 18.4899H1.99997V6.0175H7.79407C12.3574 6.085 12.444 10.5541 10.0607 11.7724C12.9449 12.8224 13.0415 18.4899 7.38824 18.4899V18.4899ZM4.49994 10.9999H7.48658C9.57655 10.9999 9.90822 8.49997 7.22658 8.49997H4.49994V10.9999V10.9999ZM7.32574 13.4999H4.49994V16.0132H7.28408C9.82988 16.0132 9.67405 13.4999 7.32574 13.4999V13.4999Z"></path></svg>
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #64748b; margin: 16px 0 0 0; font-size: 12px; line-height: 1.6;">
                © ${new Date().getFullYear()} Tariq Said. All rights reserved.<br/>
                <span style="color: #475569;">This email was sent from your portfolio contact form</span>
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

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error('Resend API Error:', error);
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
  <title>Thank You for Reaching Out</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0a122c 0%, #1e293b 100%); padding: 40px 30px; text-align: center;">
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 60px; margin-bottom: 20px;" />
              <h1 style="color: #e11d48; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">✅ Message Received!</h1>
              <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 14px;">Thank you for reaching out</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <div style="margin-bottom: 24px;">
                <p style="color: #0f172a; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                  Hi <strong style="color: #e11d48;">${name}</strong>,
                </p>
                <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0;">
                  Thank you for contacting me! I've received your message and will get back to you as soon as possible. I typically respond within 24-48 hours.
                </p>
              </div>
              
              <!-- Message Card -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; margin: 24px 0; border: 1px solid #e2e8f0;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 12px 0; color: #0f172a; font-size: 16px; font-weight: 700; display: flex; align-items: center;">
                      <span style="display: inline-block; margin-right: 8px;">📝</span>
                      Your Message
                    </h2>
                    <div style="background: #ffffff; padding: 16px; border-radius: 8px; border-left: 4px solid #e11d48;">
                      <p style="white-space: pre-wrap; color: #475569; line-height: 1.7; margin: 0; font-size: 14px;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- What's Next -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 12px; margin: 24px 0; border: 2px solid #e2e8f0;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 700;">
                      <span style="display: inline-block; margin-right: 8px;">⏱️</span>
                      What's Next?
                    </h2>
                    <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.8;">
                      <li style="margin-bottom: 8px;">I'll review your message carefully</li>
                      <li style="margin-bottom: 8px;">You'll receive a personalized response within 24-48 hours</li>
                      <li>Feel free to check out my work while you wait!</li>
                    </ul>
                  </td>
                </tr>
              </table>
              
              <!-- Quick Links -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 32px;">
                <tr>
                  <td align="center">
                    <p style="color: #64748b; font-size: 14px; margin: 0 0 16px 0; font-weight: 600;">Explore My Work</p>
                    <table role="presentation" style="border-collapse: collapse;">
                      <tr>
                        <td style="padding: 0 6px;">
                          <a href="https://portfolio.dxbmark.com/#projects" style="display: inline-block; padding: 12px 20px; background: #f1f5f9; color: #0f172a; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px; border: 2px solid #e2e8f0;">Projects</a>
                        </td>
                        <td style="padding: 0 6px;">
                          <a href="https://portfolio.dxbmark.com/#services" style="display: inline-block; padding: 12px 20px; background: #f1f5f9; color: #0f172a; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px; border: 2px solid #e2e8f0;">Services</a>
                        </td>
                        <td style="padding: 0 6px;">
                          <a href="https://portfolio.dxbmark.com/#about" style="display: inline-block; padding: 12px 20px; background: #f1f5f9; color: #0f172a; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px; border: 2px solid #e2e8f0;">About</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Signature -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e2e8f0;">
                <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0;">
                  Best regards,<br/>
                  <strong style="color: #e11d48; font-size: 16px;">Tariq Said</strong><br/>
                  <span style="color: #64748b; font-size: 13px;">Full-Stack Developer & Audio-Visual Specialist</span>
                </p>
              </div>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: linear-gradient(135deg, #0a122c 0%, #1e293b 100%); padding: 32px 30px; text-align: center;">
              <p style="color: #e11d48; margin: 0 0 12px 0; font-size: 16px; font-weight: 600; font-style: italic; letter-spacing: 0.5px;">Code. Create. Deliver.</p>
              
              <!-- Social Media Icons -->
              <table role="presentation" style="margin: 20px auto; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://github.com/tariqsaidofficial" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/in/tariqsaidofficial/" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.behance.net/tariqsaidofficial" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.1); border-radius: 8px; text-decoration: none;">
                      <svg width="20" height="20" viewBox="1 1 22 22" fill="none" stroke="white" stroke-width="1.5" stroke-linejoin="round"><path d="M20.3331 7.66665H14.4998V6H20.3331V7.66665ZM21.7714 15.9999C21.4031 17.0807 20.0806 18.4999 17.5206 18.4999C14.959 18.4999 12.884 17.059 12.884 13.7707C12.884 10.5125 14.8215 8.83747 17.439 8.83747C20.0073 8.83747 21.5756 10.3225 21.9181 12.5258C21.9831 12.9474 22.0089 13.5158 21.9973 14.3091H15.3082C15.4165 16.9849 18.2106 17.069 19.1315 15.9999H21.7714ZM15.3665 12.6666H19.5039C19.4164 11.3774 18.5573 10.8174 17.4398 10.8174C16.2181 10.8174 15.5423 11.4574 15.3665 12.6666ZM7.38824 18.4899H1.99997V6.0175H7.79407C12.3574 6.085 12.444 10.5541 10.0607 11.7724C12.9449 12.8224 13.0415 18.4899 7.38824 18.4899V18.4899ZM4.49994 10.9999H7.48658C9.57655 10.9999 9.90822 8.49997 7.22658 8.49997H4.49994V10.9999V10.9999ZM7.32574 13.4999H4.49994V16.0132H7.28408C9.82988 16.0132 9.67405 13.4999 7.32574 13.4999V13.4999Z"></path></svg>
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #64748b; margin: 16px 0 0 0; font-size: 12px; line-height: 1.6;">
                © ${new Date().getFullYear()} Tariq Said. All rights reserved.<br/>
                <span style="color: #475569;">This is an automated confirmation email</span>
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
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
