import './About.css'

function About() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-text">
          <p className="about-greeting">Hi, I'm Tanya</p>
          <p className="about-body">
            a photographer based in Selfoss, Iceland. I specialize in family photography,
            capturing moments that reflect your genuine emotions and connections.
          </p>
          <p className="about-body">
            For me, photography is all about the people — the little details, shared laughter,
            and real feelings that make your story unique. My idea is to create photos that
            feel warm and true to who you are!
          </p>
          <p className="about-body">
            While I'm based in Selfoss, I'm always excited to travel across Iceland to capture
            your special moments, wherever they may be. Let's create memories you'll cherish forever!
          </p>
        </div>
        <div className="about-photo">
          <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80" alt="Tanya" />
        </div>
      </div>
    </section>
  )
}

export default About