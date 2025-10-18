export default function EmailDemo() {
  const currentYear = new Date().getFullYear()
  const name = "Mohamed Yousef"
  const email = "elmonkared_2007@live.com"
  const phone = "+971 50 512 1583"
  const category = "Project Request / Quotation"
  const subcategory = "Request for Quotation"
  const projectType = "Audio-Visual Production"
  const message = "I would like to request a quotation for a corporate event video production. The event will be held in Dubai and requires full AV coverage including cameras, sound, and post-production editing."

  return (
    <div style={{ padding: '40px 20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#0a122c' }}>📧 Email Templates Preview</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', gap: '30px' }}>
          
          {/* Admin Notification Email */}
          <div>
            <h2 style={{ color: '#e11d48', marginBottom: '20px' }}>Admin Notification</h2>
            <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <table role="presentation" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {/* Header */}
                  <tr>
                    <td style={{ background: '#0a122c', padding: '30px 20px', textAlign: 'center' }}>
                      <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style={{ height: '50px', display: 'block', margin: '0 auto 15px auto' }} />
                      <h1 style={{ color: '#e11d48', margin: 0, fontSize: '24px', fontWeight: 'normal' }}>{subcategory}</h1>
                    </td>
                  </tr>
                  
                  {/* Content */}
                  <tr>
                    <td style={{ padding: '30px 20px' }}>
                      <p style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px' }}>
                        <strong style={{ color: '#0a122c' }}>Category:</strong><br/>
                        {category}
                      </p>
                      
                      <p style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px' }}>
                        <strong style={{ color: '#0a122c' }}>Subtype:</strong><br/>
                        {subcategory}
                      </p>
                      
                      <p style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px' }}>
                        <strong style={{ color: '#0a122c' }}>Name:</strong><br/>
                        {name}
                      </p>
                      
                      <p style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px' }}>
                        <strong style={{ color: '#0a122c' }}>Email:</strong><br/>
                        <a href={`mailto:${email}`} style={{ color: '#e11d48', textDecoration: 'none' }}>{email}</a>
                      </p>
                      
                      {phone && (
                        <p style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px' }}>
                          <strong style={{ color: '#0a122c' }}>Phone:</strong><br/>
                          <a href={`tel:${phone}`} style={{ color: '#e11d48', textDecoration: 'none' }}>{phone}</a>
                        </p>
                      )}
                      
                      {projectType && (
                        <p style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px' }}>
                          <strong style={{ color: '#0a122c' }}>Project Type:</strong><br/>
                          {projectType}
                        </p>
                      )}
                      
                      <p style={{ margin: '0 0 10px 0', color: '#0a122c', fontSize: '15px', fontWeight: 'bold' }}>Message:</p>
                      <p style={{ whiteSpace: 'pre-wrap', color: '#333', lineHeight: '1.6', margin: '0 0 20px 0', fontSize: '15px' }}>{message}</p>
                      
                      <p style={{ margin: '0', color: '#94a3b8', fontSize: '13px', fontStyle: 'italic' }}>
                        Received: {new Date().toLocaleString('en-US', { 
                          dateStyle: 'full', 
                          timeStyle: 'short',
                          timeZone: 'Asia/Dubai'
                        })}
                      </p>
                    </td>
                  </tr>
                  
                  {/* Footer */}
                  <tr>
                    <td style={{ background: '#0a122c', padding: '25px 20px', textAlign: 'center' }}>
                      <p style={{ color: '#94a3b8', margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' }}>Code. Create. Deliver.</p>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '12px' }}>
                        © {currentYear} <a href="https://portfolio.dxbmark.com/" style={{ color: '#e11d48', textDecoration: 'none' }}>Tariq Said</a>. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Client Confirmation Email */}
          <div>
            <h2 style={{ color: '#e11d48', marginBottom: '20px' }}>Client Confirmation</h2>
            <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <table role="presentation" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {/* Header */}
                  <tr>
                    <td style={{ background: '#0a122c', padding: '30px 20px', textAlign: 'center' }}>
                      <img src="https://portfolio.dxbmark.com/TariqSaid-logo.png" alt="Tariq Said" style={{ height: '50px', display: 'block', margin: '0 auto 15px auto' }} />
                      <h1 style={{ color: '#e11d48', margin: 0, fontSize: '24px', fontWeight: 'normal' }}>{subcategory}</h1>
                    </td>
                  </tr>
                  
                  {/* Content */}
                  <tr>
                    <td style={{ padding: '30px 20px' }}>
                      <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
                        Dear <strong>{name}</strong>,
                      </p>
                      
                      <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Thank you for your <strong>{subcategory}</strong>! We have successfully received your submission and will get back to you as soon as possible.
                      </p>
                      
                      <div style={{ background: '#f5f5f5', borderLeft: '4px solid #e11d48', padding: '15px', margin: '20px 0', borderRadius: '4px' }}>
                        <p style={{ margin: '0 0 10px 0', color: '#0a122c', fontSize: '14px', fontWeight: 'bold' }}>Submission Details:</p>
                        <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}><strong>Category:</strong> {category}</p>
                        <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}><strong>Type:</strong> {subcategory}</p>
                        {projectType && <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '14px' }}><strong>Project Type:</strong> {projectType}</p>}
                      </div>
                      
                      <div style={{ borderLeft: '4px solid #e11d48', paddingLeft: '15px', margin: '20px 0' }}>
                        <p style={{ margin: '0 0 5px 0', color: '#0a122c', fontSize: '14px', fontWeight: 'bold' }}>Your Message:</p>
                        <p style={{ whiteSpace: 'pre-wrap', color: '#666', lineHeight: '1.6', margin: 0, fontSize: '14px' }}>{message}</p>
                      </div>
                      
                      <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '20px 0 15px 0' }}>
                        We typically respond within 24-48 hours. If you need immediate assistance, please feel free to contact us directly at:
                      </p>
                      
                      <p style={{ margin: '0 0 5px 0', color: '#333', fontSize: '15px' }}>
                        <strong style={{ color: '#0a122c' }}>Email:</strong> <a href="mailto:info@dxbmark.com" style={{ color: '#e11d48', textDecoration: 'none' }}>info@dxbmark.com</a>
                      </p>
                      
                      <p style={{ margin: '0 0 20px 0', color: '#333', fontSize: '15px' }}>
                        <strong style={{ color: '#0a122c' }}>Phone:</strong> <a href="tel:+971501234567" style={{ color: '#e11d48', textDecoration: 'none' }}>+971 50 123 4567</a>
                      </p>
                      
                      <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Thank you for choosing us!
                      </p>
                      
                      <p style={{ margin: '0', color: '#94a3b8', fontSize: '13px', fontStyle: 'italic' }}>
                        Sent: {new Date().toLocaleString('en-US', { 
                          dateStyle: 'full', 
                          timeStyle: 'short',
                          timeZone: 'Asia/Dubai'
                        })}
                      </p>
                    </td>
                  </tr>
                  
                  {/* Promotional Section */}
                  <tr>
                    <td style={{ padding: '0 20px 30px 20px' }}>
                      <div style={{ 
                        background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(225, 29, 72, 0.1) 100%)',
                        border: '1px solid rgba(225, 29, 72, 0.2)',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'center'
                      }}>
                        <h3 style={{ color: '#e11d48', margin: '0 0 10px 0', fontSize: '18px' }}>Why Choose Us?</h3>
                        <p style={{ color: '#333', fontSize: '14px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
                          Expert in full-stack development, IT infrastructure, and Audio-Visual integration. We deliver innovative solutions that blend technical excellence with creative vision to bring your projects to life.
                        </p>
                        <a href="https://portfolio.dxbmark.com/" style={{
                          display: 'inline-block',
                          padding: '10px 20px',
                          background: '#e11d48',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}>View Portfolio</a>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Footer */}
                  <tr>
                    <td style={{ background: '#0a122c', padding: '25px 20px', textAlign: 'center' }}>
                      {/* Social Media Icons */}
                      <div style={{ marginBottom: '20px' }}>
                        <a href="https://github.com/tariqsaidofficial" style={{ 
                          display: 'inline-block',
                          margin: '0 8px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          padding: '10px',
                          borderRadius: '8px',
                          textDecoration: 'none'
                        }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/tariqsaidofficial/" style={{ 
                          display: 'inline-block',
                          margin: '0 8px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          padding: '10px',
                          borderRadius: '8px',
                          textDecoration: 'none'
                        }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                          </svg>
                        </a>
                        <a href="https://www.behance.net/tariqsaid" style={{ 
                          display: 'inline-block',
                          margin: '0 8px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          padding: '10px',
                          borderRadius: '8px',
                          textDecoration: 'none'
                        }}>
                          <svg width="24" height="24" viewBox="1 1 22 22" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round">
                            <path d="M20.3331 7.66665H14.4998V6H20.3331V7.66665ZM21.7714 15.9999C21.4031 17.0807 20.0806 18.4999 17.5206 18.4999C14.959 18.4999 12.884 17.059 12.884 13.7707C12.884 10.5125 14.8215 8.83747 17.439 8.83747C20.0073 8.83747 21.5756 10.3225 21.9181 12.5258C21.9831 12.9474 22.0089 13.5158 21.9973 14.3091H15.3082C15.4165 16.9849 18.2106 17.069 19.1315 15.9999H21.7714ZM15.3665 12.6666H19.5039C19.4164 11.3774 18.5573 10.8174 17.4398 10.8174C16.2181 10.8174 15.5423 11.4574 15.3665 12.6666ZM7.38824 18.4899H1.99997V6.0175H7.79407C12.3574 6.085 12.444 10.5541 10.0607 11.7724C12.9449 12.8224 13.0415 18.4899 7.38824 18.4899V18.4899ZM4.49994 10.9999H7.48658C9.57655 10.9999 9.90822 8.49997 7.22658 8.49997H4.49994V10.9999V10.9999ZM7.32574 13.4999H4.49994V16.0132H7.28408C9.82988 16.0132 9.67405 13.4999 7.32574 13.4999V13.4999Z"/>
                          </svg>
                        </a>
                      </div>
                      
                      <p style={{ color: '#94a3b8', margin: '0 0 8px 0', fontSize: '14px', fontStyle: 'italic' }}>Code. Create. Deliver.</p>
                      <p style={{ color: '#64748b', margin: '0 0 12px 0', fontSize: '12px' }}>
                        © {currentYear} <a href="https://portfolio.dxbmark.com/" style={{ color: '#e11d48', textDecoration: 'none' }}>Tariq Said</a>. All rights reserved.
                      </p>
                      <p style={{ color: '#64748b', margin: 0, fontSize: '11px' }}>
                        This is an automated message from <strong>noreply@dxbmark.com</strong>. Please do not reply to this email.<br/>
                        For support, contact us at <a href="mailto:info@dxbmark.com" style={{ color: '#e11d48', textDecoration: 'none' }}>info@dxbmark.com</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/" style={{ 
            display: 'inline-block',
            padding: '12px 30px',
            background: '#e11d48',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
