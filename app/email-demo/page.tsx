"use client"

export default function EmailDemo() {
  const currentYear = new Date().getFullYear()
  
  // Sample data
  const name = "John Doe"
  const email = "john.doe@example.com"
  const phone = "+971 50 123 4567"
  const message = "Hello! I'm interested in your services.\n\nI would like to discuss a potential project with you. Please let me know your availability for a call.\n\nBest regards,\nJohn"

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f1f5f9', 
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#0a122c' }}>
          Email Template Preview
        </h1>
        
        {/* Email Preview */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '8px', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          {/* Header with Logo */}
          <div style={{ 
            background: 'linear-gradient(135deg, #0a122c 0%, #0f172a 100%)', 
            padding: '30px 20px', 
            textAlign: 'center'
          }}>
            <img 
              src="/TariqSaid-logo.png" 
              alt="Tariq Said" 
              style={{ height: '50px', marginBottom: '10px', display: 'block', margin: '0 auto 10px auto' }} 
            />
            <h2 style={{ 
              color: '#e11d48', 
              margin: '10px 0 0 0', 
              fontSize: '24px' 
            }}>
              New Contact Form Submission
            </h2>
          </div>
          
          {/* Content */}
          <div style={{ padding: '30px 20px' }}>
            <div style={{ 
              background: '#f5f5f5', 
              padding: '20px', 
              borderRadius: '8px', 
              marginBottom: '20px' 
            }}>
              <p style={{ margin: '0 0 10px 0' }}>
                <strong style={{ color: '#0a122c' }}>Name:</strong> {name}
              </p>
              <p style={{ margin: '0 0 10px 0' }}>
                <strong style={{ color: '#0a122c' }}>Email:</strong>{' '}
                <a href={`mailto:${email}`} style={{ color: '#e11d48', textDecoration: 'none' }}>
                  {email}
                </a>
              </p>
              <p style={{ margin: '0' }}>
                <strong style={{ color: '#0a122c' }}>Phone:</strong>{' '}
                <a href={`tel:${phone}`} style={{ color: '#e11d48', textDecoration: 'none' }}>
                  {phone}
                </a>
              </p>
            </div>
            
            <div style={{ 
              background: '#fff', 
              padding: '20px', 
              border: '1px solid #e5e5e5', 
              borderRadius: '8px' 
            }}>
              <h3 style={{ 
                margin: '0 0 15px 0', 
                color: '#0a122c', 
                fontSize: '18px' 
              }}>
                Message:
              </h3>
              <p style={{ 
                whiteSpace: 'pre-wrap', 
                color: '#333', 
                lineHeight: '1.6', 
                margin: '0' 
              }}>
                {message}
              </p>
            </div>
          </div>
          
          {/* Footer */}
          <div style={{ 
            background: '#0a122c', 
            padding: '25px 20px', 
            textAlign: 'center'
          }}>
            <p style={{ 
              color: '#94a3b8', 
              margin: '0 0 8px 0', 
              fontSize: '14px', 
              fontStyle: 'italic' 
            }}>
              Code. Create. Deliver.
            </p>
            <p style={{ 
              color: '#64748b', 
              margin: '0', 
              fontSize: '12px' 
            }}>
              © {currentYear} Tariq Said. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#e11d48',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
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
