import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const galleryCategories = ['Family', 'Newborn', 'Pregnancy', 'Wedding', 'Ferming', 'Birthday', 'Skirn']

function Navbar() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
        <div className="dropdown">
          <a href="#" onClick={(e) => { e.preventDefault(); setGalleryOpen(!galleryOpen) }}>Gallery ∨</a>
          {galleryOpen && (
            <div className="dropdown-menu">
              {galleryCategories.map(cat => (
                <a key={cat} href="#" onClick={(e) => { e.preventDefault(); navigate(`/gallery/${cat.toLowerCase()}`); setGalleryOpen(false) }}>{cat}</a>
              ))}
            </div>
          )}
        </div>
<a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => { document.getElementById('price').scrollIntoView({ behavior: 'smooth' }) }, 100) }}>Price</a>      </div>

      <div className="nav-center">
        <span className="logo-text" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>tanyapphotography</span>
      </div>

      <div className="nav-right">
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/reviews') }}>Reviews</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact') }}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar