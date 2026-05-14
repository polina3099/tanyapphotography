import './ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <p className="contact-page-sub">— get in touch —</p>
        <h1 className="contact-page-title">Let's create something beautiful</h1>
        <p className="contact-page-desc">I'd love to hear about your story. Reach out and let's chat!</p>
      </div>

      <div className="contact-page-inner">
        <div className="contact-page-photo">
          <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80" alt="contact" />
        </div>

        <div className="contact-page-info">
          <div className="contact-links">

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp">
              <span className="contact-link-icon">💬</span>
              <div>
                <p className="contact-link-label">WhatsApp</p>
                <p className="contact-link-value">+123 456 7890</p>
              </div>
            </a>

            <a href="https://www.instagram.com/tanyapphotography" target="_blank" rel="noopener noreferrer" className="contact-link instagram">
              <span className="contact-link-icon">📷</span>
              <div>
                <p className="contact-link-label">Instagram</p>
                <p className="contact-link-value">@tanyapphotography</p>
              </div>
            </a>

            <a href="mailto:tanya@example.com" className="contact-link email">
              <span className="contact-link-icon">✉</span>
              <div>
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">tanya@example.com</p>
              </div>
            </a>

            <a href="tel:+1234567890" className="contact-link phone">
              <span className="contact-link-icon">📞</span>
              <div>
                <p className="contact-link-label">Phone</p>
                <p className="contact-link-value">+123 456 7890</p>
              </div>
            </a>

          </div>

          <div className="contact-note">
            <p>Based in Selfoss, Iceland</p>
            <p>Available for travel across Iceland</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage