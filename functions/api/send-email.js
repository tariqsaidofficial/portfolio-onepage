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
        from: 'DXBMark <info@dxbmark.com>',
        to: ['info@dxbmark.com', 'tariq.yousef@outlook.com'],
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #0a122c 0%, #0f172a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 50px; display: block; margin: 0 auto 10px auto;" />
              <h2 style="color: #e11d48; margin: 10px 0 0 0; font-size: 24px;">New Contact Form Submission</h2>
            </div>
            
            <div style="padding: 30px 20px;">
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #0a122c;">Name:</strong> ${name}</p>
                <p style="margin: 0 0 10px 0;"><strong style="color: #0a122c;">Email:</strong> <a href="mailto:${email}" style="color: #e11d48; text-decoration: none;">${email}</a></p>
                <p style="margin: 0;"><strong style="color: #0a122c;">Phone:</strong> <a href="tel:${phone}" style="color: #e11d48; text-decoration: none;">${phone}</a></p>
              </div>
              
              <div style="background: #fff; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
                <h3 style="margin: 0 0 15px 0; color: #0a122c; font-size: 18px;">Message:</h3>
                <p style="white-space: pre-wrap; color: #333; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </div>
            
            <div style="background: #0a122c; padding: 25px 20px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
              <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Tariq Said. All rights reserved.</p>
            </div>
          </div>
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
        from: 'DXBMark <noreply@dxbmark.com>',
        to: [email],
        subject: 'Thank you for contacting Tariq Said',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #0a122c 0%, #0f172a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 50px; display: block; margin: 0 auto 10px auto;" />
              <h2 style="color: #e11d48; margin: 10px 0 0 0; font-size: 24px;">Thank You for Reaching Out!</h2>
            </div>
            
            <div style="padding: 30px 20px;">
              <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">Hi <strong>${name}</strong>,</p>
              <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">
                Thank you for contacting me! I've received your message and will get back to you as soon as possible.
              </p>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin: 0 0 15px 0; color: #0a122c; font-size: 16px;">Your Message:</h3>
                <p style="white-space: pre-wrap; color: #666; line-height: 1.6; margin: 0;">${message}</p>
              </div>
              
              <p style="color: #333; line-height: 1.6; margin: 15px 0 0 0;">
                Best regards,<br/>
                <strong style="color: #e11d48;">Tariq Said</strong><br/>
                <span style="color: #666; font-size: 14px;">Full-Stack Developer & Audio-Visual Specialist</span>
              </p>
            </div>
            
            <div style="background: #0a122c; padding: 25px 20px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
              <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Tariq Said. All rights reserved.</p>
            </div>
          </div>
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
