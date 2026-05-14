import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-text">
          <h2>Check your date</h2>
          <p>or ask any question</p>
          <a href="https://www.instagram.com/tanyapphotography" target="_blank" rel="noopener noreferrer" className="contact-btn">Send a message</a>
        </div>
        <div className="contact-photo">
          <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80" alt="contact" />
        </div>
      </div>
      <footer className="footer">
        <a href="https://www.instagram.com/tanyapphotography" target="_blank" rel="noopener noreferrer" className="footer-link">@tanyapphotography</a>
      </footer>
    </section>
  )
}

export default Contact