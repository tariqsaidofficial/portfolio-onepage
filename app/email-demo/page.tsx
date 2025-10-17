"use client"

export default function EmailDemo() {
  const currentYear = new Date().getFullYear()
  
  const name = "John Doe"
  const email = "john.doe@example.com"
  const phone = "+971 50 123 4567"
  const message = "Hello! I'm interested in your services.\n\nI would like to discuss a potential project with you. Please let me know your availability for a call.\n\nBest regards,\nJohn"

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#0a122c', fontSize: '32px' }}>
          📧 Email Templates Preview
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', gap: '40px' }}>
          
          {/* Admin Email Template */}
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#e11d48', fontSize: '20px' }}>
              Admin Notification
            </h2>
            <div style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #0a122c 0%, #0f172a 100%)', padding: '30px 20px', textAlign: 'center' }}>
                <img src="/TariqSaid-logo.png" alt="Tariq Said" style={{ height: '50px', display: 'block', margin: '0 auto 10px auto' }} />
                <h2 style={{ color: '#e11d48', margin: '10px 0 0 0', fontSize: '24px' }}>New Contact Form Submission</h2>
              </div>
              
              <div style={{ padding: '30px 20px' }}>
                <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <p style={{ margin: '0 0 10px 0' }}><strong style={{ color: '#0a122c' }}>Name:</strong> {name}</p>
                  <p style={{ margin: '0 0 10px 0' }}><strong style={{ color: '#0a122c' }}>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#e11d48', textDecoration: 'none' }}>{email}</a></p>
                  <p style={{ margin: '0' }}><strong style={{ color: '#0a122c' }}>Phone:</strong> <a href={`tel:${phone}`} style={{ color: '#e11d48', textDecoration: 'none' }}>{phone}</a></p>
                </div>
                
                <div style={{ background: '#fff', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 15px 0', color: '#0a122c', fontSize: '18px' }}>Message:</h3>
                  <p style={{ whiteSpace: 'pre-wrap', color: '#333', lineHeight: '1.6', margin: '0' }}>{message}</p>
                </div>
              </div>
              
              <div style={{ background: '#0a122c', padding: '25px 20px', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' }}>Code. Create. Deliver.</p>
                <p style={{ color: '#64748b', margin: '0', fontSize: '12px' }}>© {currentYear} Tariq Said. All rights reserved.</p>
              </div>
            </div>
          </div>

          {/* Client Confirmation Email Template */}
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#e11d48', fontSize: '20px' }}>
              Client Confirmation
            </h2>
            <div style={{ background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #0a122c 0%, #0f172a 100%)', padding: '30px 20px', textAlign: 'center' }}>
                <img src="/TariqSaid-logo.png" alt="Tariq Said" style={{ height: '50px', display: 'block', margin: '0 auto 10px auto' }} />
                <h2 style={{ color: '#e11d48', margin: '10px 0 0 0', fontSize: '24px' }}>Message Received Successfully</h2>
              </div>
              
              <div style={{ padding: '30px 20px' }}>
                <p style={{ color: '#0a122c', fontSize: '16px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                  Dear <strong>{name}</strong>,
                </p>
                
                <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                  Thank you for reaching out to us! We have successfully received your message and will get back to you as soon as possible.
                </p>
                
                <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #e11d48', marginBottom: '20px' }}>
                  <p style={{ color: '#0a122c', fontSize: '14px', margin: '0 0 10px 0' }}>
                    <strong>Your Message:</strong>
                  </p>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5', margin: '0', whiteSpace: 'pre-wrap' }}>{message}</p>
                </div>
                
                <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                  We typically respond within 24-48 hours. If you need immediate assistance, please feel free to contact us directly at:
                </p>
                
                <div style={{ background: '#fff', padding: '15px', border: '1px solid #e5e5e5', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ margin: '0 0 5px 0', color: '#0a122c', fontSize: '14px' }}>
                    <strong>Email:</strong> <a href="mailto:info@dxbmark.com" style={{ color: '#e11d48', textDecoration: 'none' }}>info@dxbmark.com</a>
                  </p>
                  <p style={{ margin: '0', color: '#0a122c', fontSize: '14px' }}>
                    <strong>Phone:</strong> <a href="tel:+971505121583" style={{ color: '#e11d48', textDecoration: 'none' }}>+971 50 512 1583</a>
                  </p>
                </div>
                
                <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '20px 0 0 0' }}>
                  Thank you for choosing us!
                </p>
                
                {/* About Us Section */}
                <div style={{ background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(225, 29, 72, 0.1) 100%)', padding: '20px', borderRadius: '8px', marginTop: '25px', border: '1px solid rgba(225, 29, 72, 0.2)' }}>
                  <h3 style={{ color: '#e11d48', fontSize: '18px', margin: '0 0 12px 0', textAlign: 'center' }}>Why Choose Us?</h3>
                  <p style={{ color: '#333', fontSize: '14px', lineHeight: '1.6', margin: '0 0 15px 0', textAlign: 'center' }}>
                    Full-Stack Developer & Audio-Visual Specialist with 15+ years of experience in web development, event technology, and AV systems.
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <a href="https://portfolio.dxbmark.com" style={{ display: 'inline-block', padding: '10px 20px', background: '#e11d48', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}>
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
              
              <div style={{ background: '#0a122c', padding: '25px 20px', textAlign: 'center' }}>
                {/* Social Media Links */}
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ color: '#94a3b8', margin: '0 0 15px 0', fontSize: '14px', fontWeight: '600' }}>Connect with us:</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <a href="https://github.com/tariqsaidofficial" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/tariqsaidofficial/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="https://www.behance.net/tariqsaidofficial" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s' }}>
                      <svg width="24" height="24" viewBox="1 1 22 22" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3331 7.66665H14.4998V6H20.3331V7.66665ZM21.7714 15.9999C21.4031 17.0807 20.0806 18.4999 17.5206 18.4999C14.959 18.4999 12.884 17.059 12.884 13.7707C12.884 10.5125 14.8215 8.83747 17.439 8.83747C20.0073 8.83747 21.5756 10.3225 21.9181 12.5258C21.9831 12.9474 22.0089 13.5158 21.9973 14.3091H15.3082C15.4165 16.9849 18.2106 17.069 19.1315 15.9999H21.7714ZM15.3665 12.6666H19.5039C19.4164 11.3774 18.5573 10.8174 17.4398 10.8174C16.2181 10.8174 15.5423 11.4574 15.3665 12.6666ZM7.38824 18.4899H1.99997V6.0175H7.79407C12.3574 6.085 12.444 10.5541 10.0607 11.7724C12.9449 12.8224 13.0415 18.4899 7.38824 18.4899V18.4899ZM4.49994 10.9999H7.48658C9.57655 10.9999 9.90822 8.49997 7.22658 8.49997H4.49994V10.9999V10.9999ZM7.32574 13.4999H4.49994V16.0132H7.28408C9.82988 16.0132 9.67405 13.4999 7.32574 13.4999V13.4999Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <p style={{ color: '#94a3b8', margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' }}>Code. Create. Deliver.</p>
                <p style={{ color: '#64748b', margin: '0 0 8px 0', fontSize: '12px' }}>© {currentYear} Tariq Said. All rights reserved.</p>
                <p style={{ color: '#64748b', margin: '0', fontSize: '11px' }}>
                  This is an automated message from <strong>noreply@dxbmark.com</strong>. Please do not reply to this email.<br/>
                  For support, contact us at <a href="mailto:info@dxbmark.com" style={{ color: '#e11d48', textDecoration: 'none' }}>info@dxbmark.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#e11d48',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              transition: 'all 0.2s'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
