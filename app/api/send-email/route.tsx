import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to admin
    await resend.emails.send({
      from: "DXBMark <info@dxbmark.com>",
      to: ["info@dxbmark.com", "tariq.yousef@outlook.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <!-- Header with Logo -->
          <div style="background: linear-gradient(135deg, #0a122c 0%, #0f172a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 50px; display: block; margin: 0 auto 10px auto;" />
            <h2 style="color: #e11d48; margin: 10px 0 0 0; font-size: 24px;">New Contact Form Submission</h2>
          </div>
          
          <!-- Content -->
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
          
          <!-- Footer -->
          <div style="background: #0a122c; padding: 25px 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
            <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Tariq Said. All rights reserved.</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to client
    await resend.emails.send({
      from: "DXBMark <noreply@dxbmark.com>",
      to: email,
      subject: "Thank You for Contacting Us - Message Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <!-- Header with Logo -->
          <div style="background: linear-gradient(135deg, #0a122c 0%, #0f172a 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style="height: 50px; display: block; margin: 0 auto 10px auto;" />
            <h2 style="color: #e11d48; margin: 10px 0 0 0; font-size: 24px;">Message Received Successfully</h2>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <p style="color: #0a122c; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Dear <strong>${name}</strong>,
            </p>
            
            <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              Thank you for reaching out to us! We have successfully received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #e11d48; margin-bottom: 20px;">
              <p style="color: #0a122c; font-size: 14px; margin: 0 0 10px 0;">
                <strong>Your Message:</strong>
              </p>
              <p style="color: #555; font-size: 14px; line-height: 1.5; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
              We typically respond within 24-48 hours. If you need immediate assistance, please feel free to contact us directly at:
            </p>
            
            <div style="background: #fff; padding: 15px; border: 1px solid #e5e5e5; border-radius: 8px; text-align: center;">
              <p style="margin: 0 0 5px 0; color: #0a122c; font-size: 14px;">
                <strong>Email:</strong> <a href="mailto:info@dxbmark.com" style="color: #e11d48; text-decoration: none;">info@dxbmark.com</a>
              </p>
              <p style="margin: 0; color: #0a122c; font-size: 14px;">
                <strong>Phone:</strong> <a href="tel:+971505121583" style="color: #e11d48; text-decoration: none;">+971 50 512 1583</a>
              </p>
            </div>
            
            <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 20px 0 0 0;">
              Thank you for choosing us!
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #0a122c; padding: 25px 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px; font-style: italic;">Code. Create. Deliver.</p>
            <p style="color: #64748b; margin: 0 0 8px 0; font-size: 12px;">© ${new Date().getFullYear()} Tariq Said. All rights reserved.</p>
            <p style="color: #64748b; margin: 0; font-size: 11px;">
              This is an automated message from <strong>noreply@dxbmark.com</strong>. Please do not reply to this email.<br/>
              For support, contact us at <a href="mailto:info@dxbmark.com" style="color: #e11d48; text-decoration: none;">info@dxbmark.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Resend Error:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
