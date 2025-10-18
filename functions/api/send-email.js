// Cloudflare Pages Function for sending emails
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    
    // Parse FormData for file upload support
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const category = formData.get('category');
    const subcategory = formData.get('subcategory');
    const projectType = formData.get('projectType');
    const message = formData.get('message');
    const cvFile = formData.get('cvFile');
    const turnstileToken = formData.get('turnstileToken');
    
    // Verify Turnstile token
    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: "Security verification required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Get client IP
    const clientIP = request.headers.get('CF-Connecting-IP') || 
                     request.headers.get('X-Forwarded-For') || 
                     'unknown';
    
    // Verify Turnstile token with Cloudflare
    const verifyFormData = new FormData();
    verifyFormData.append('secret', env.TURNSTILE_SECRET_KEY);
    verifyFormData.append('response', turnstileToken);
    verifyFormData.append('remoteip', clientIP);
    
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyFormData
    });
    
    const turnstileResult = await turnstileResponse.json();
    
    if (!turnstileResult.success) {
      console.error('Turnstile verification failed:', turnstileResult['error-codes']);
      return new Response(JSON.stringify({ 
        error: "Security verification failed",
        details: turnstileResult['error-codes']
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate required fields
    if (!name || !email || !category || !message) {
      return new Response(JSON.stringify({ error: "Required fields are missing" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Subcategory is not required for General Inquiries
    if (category !== "general" && !subcategory) {
      return new Response(JSON.stringify({ error: "Subcategory is required" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get category label
    const categoryLabels = {
      "general": "General Inquiries",
      "project": "Project Request / Quotation",
      "collaboration": "Collaboration / Partnership",
      "job": "Job / Hiring Opportunity",
      "feedback": "Feedback / Complaint / Support"
    };
    const categoryLabel = categoryLabels[category] || category;
    
    // Auto-reply messages based on category
    const autoReplies = {
      general: `Thank you for getting in touch. Your message has been received and will be reviewed shortly.
This is an automatic confirmation of receipt. No commitments are made until further discussion.`,
      
      project: `Your project details have been received. I'll review them carefully and follow up soon with an estimate or next steps.
This is an automatic confirmation of receipt. No commitments are made until further discussion.`,
      
      collaboration: `Thank you for your collaboration request. I'll review your message and respond shortly to discuss possibilities.
This is an automatic confirmation of receipt. No commitments are made until further discussion.`,
      
      job: `Your information has been received. I'll review your details and get back to you if a suitable opportunity is available.
This is an automatic confirmation of receipt. No commitments are made until further discussion.`,
      
      feedback: `Thank you for your message. I'll review your feedback and handle it as soon as possible.
This is an automatic confirmation of receipt. No commitments are made until further discussion.`
    };
    
    const autoReplyMessage = autoReplies[category] || autoReplies.general;

    // Prepare CV attachment if exists
    let cvAttachment = null;
    if (cvFile && cvFile.size > 0) {
      try {
        const arrayBuffer = await cvFile.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        
        // Convert to base64 in chunks to avoid call stack size exceeded
        let binary = '';
        const chunkSize = 0x8000; // 32KB chunks
        for (let i = 0; i < bytes.length; i += chunkSize) {
          const chunk = bytes.subarray(i, i + chunkSize);
          binary += String.fromCharCode.apply(null, chunk);
        }
        const base64Content = btoa(binary);
        
        cvAttachment = {
          filename: cvFile.name || 'cv.pdf',
          content: base64Content,
          type: 'application/pdf'
        };
      } catch (error) {
        console.error('Error processing CV file:', error);
        // Continue without attachment if there's an error
      }
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
        subject: subcategory ? `${subcategory} from ${name}` : `${categoryLabel} from ${name}`,
        reply_to: email,
        ...(cvAttachment && { attachments: [cvAttachment] }),
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
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.webp" alt="Tariq Said" style="height: 50px; display: block; margin: 0 auto 15px auto;" />
              <h1 style="color: #e11d48; margin: 0; font-size: 24px; font-weight: normal;">${subcategory || categoryLabel}</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">
              <p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Category:</strong><br/>
                ${categoryLabel}
              </p>
              
              ${subcategory ? `<p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Subtype:</strong><br/>
                ${subcategory}
              </p>` : ''}
              
              <p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Name:</strong><br/>
                ${name}
              </p>
              
              <p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Email:</strong><br/>
                <a href="mailto:${email}" style="color: #e11d48; text-decoration: none;">${email}</a>
              </p>
              
              ${phone ? `<p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Phone:</strong><br/>
                <a href="tel:${phone}" style="color: #e11d48; text-decoration: none;">${phone}</a>
              </p>` : ''}
              
              ${projectType ? `<p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">Project Type:</strong><br/>
                ${projectType}
              </p>` : ''}
              
              ${cvFile ? `<p style="margin: 0 0 15px 0; color: #333; font-size: 15px;">
                <strong style="color: #0a122c;">CV Attached:</strong><br/>
                <span style="color: #e11d48;">✓ CV file included</span>
              </p>` : ''}
              
              <p style="margin: 0 0 10px 0; color: #0a122c; font-size: 15px; font-weight: bold;">Message:</p>
              <p style="white-space: pre-wrap; color: #333; line-height: 1.6; margin: 0 0 20px 0; font-size: 15px;">${message}</p>
              
              <p style="margin: 0; color: #94a3b8; font-size: 13px; font-style: italic;">
                Received: ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Dubai' })}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #0a122c; padding: 25px 20px; text-align: center;">
              <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
              <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} <a href="https://portfolio.dxbmark.com/" style="color: #e11d48; text-decoration: none;">Tariq Said</a>. All rights reserved.</p>
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
        from: 'Tariq Said | Code. Create. Deliver. <noreply@dxbmark.com>',
        to: [email],
        subject: `Thank you for contacting us - ${categoryLabel}`,
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
              <img src="https://portfolio.dxbmark.com/TariqSaid-logo.webp" alt="Tariq Said" style="height: 50px; display: block; margin: 0 auto 15px auto;" />
              <h1 style="color: #e11d48; margin: 0; font-size: 24px; font-weight: normal;">Message Received Successfully</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 15px 0;">
                Dear <strong>${name}</strong>,
              </p>
              
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0; white-space: pre-line;">
                ${autoReplyMessage}
              </p>
              
              <div style="background: #f5f5f5; border-left: 4px solid #e11d48; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0 0 10px 0; color: #0a122c; font-size: 14px; font-weight: bold;">Submission Details:</p>
                <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Category:</strong> ${categoryLabel}</p>
                ${subcategory ? `<p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Type:</strong> ${subcategory}</p>` : ''}
                ${projectType ? `<p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Project Type:</strong> ${projectType}</p>` : ''}
                ${cvFile ? `<p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>CV:</strong> <span style="color: #e11d48;">✓ Attached</span></p>` : ''}
              </div>
              
              <div style="border-left: 4px solid #e11d48; padding-left: 15px; margin: 20px 0;">
                <p style="margin: 0 0 5px 0; color: #0a122c; font-size: 14px; font-weight: bold;">Your Message:</p>
                <p style="white-space: pre-wrap; color: #666; line-height: 1.6; margin: 0; font-size: 14px;">${message}</p>
              </div>
              
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 20px 0 15px 0;">
                We typically respond within 24-48 hours.
              </p>
              
              <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for choosing us!
              </p>
              
              <p style="margin: 0; color: #94a3b8; font-size: 13px; font-style: italic;">
                Sent: ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Dubai' })}
              </p>
            </td>
          </tr>
          
          <!-- Promotional Section -->
          <tr>
            <td style="padding: 0 20px 30px 20px;">
              <div style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(225, 29, 72, 0.1) 100%); border: 1px solid rgba(225, 29, 72, 0.2); border-radius: 8px; padding: 20px; text-align: center;">
                <h3 style="color: #e11d48; margin: 0 0 10px 0; font-size: 18px;">Why Choose Us?</h3>
                <p style="color: #333; font-size: 14px; line-height: 1.6; margin: 0 0 15px 0;">
                  Expert in full-stack development, IT infrastructure, and Audio-Visual integration. We deliver innovative solutions that blend technical excellence with creative vision to bring your projects to life.
                </p>
                <a href="https://portfolio.dxbmark.com/" style="display: inline-block; padding: 10px 20px; background: #e11d48; color: white; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: bold;">View Portfolio</a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #0a122c; padding: 25px 20px; text-align: center;">
              <!-- Social Media Icons -->
              <table role="presentation" style="margin: 0 auto 20px auto; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://github.com/tariqsaidofficial" style="display: inline-block; background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; text-decoration: none;">
                      <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" width="24" height="24" style="display: block; border: 0;" />
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.linkedin.com/in/tariqsaidofficial/" style="display: inline-block; background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; text-decoration: none;">
                      <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" width="24" height="24" style="display: block; border: 0;" />
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.behance.net/tariqsaidofficial" style="display: inline-block; background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; text-decoration: none;">
                      <img src="https://img.icons8.com/ios-filled/50/ffffff/behance.png" alt="Behance" width="24" height="24" style="display: block; border: 0;" />
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://wa.me/971505121583" style="display: inline-block; background: rgba(37, 211, 102, 0.2); padding: 10px; border-radius: 8px; text-decoration: none;">
                      <img src="https://img.icons8.com/ios-filled/50/25D366/whatsapp.png" alt="WhatsApp" width="24" height="24" style="display: block; border: 0;" />
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
              <p style="color: #64748b; margin: 0 0 12px 0; font-size: 12px;">© ${new Date().getFullYear()} <a href="https://portfolio.dxbmark.com/" style="color: #e11d48; text-decoration: none;">Tariq Said</a>. All rights reserved.</p>
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
