import { useNavigate } from 'react-router-dom'
import { galleryData } from '../data/gallery'
import './Pages.css'

function GalleryPage() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-sub">— portfolio —</p>
        <h1 className="page-title">Gallery</h1>
      </div>
      <div className="category-grid">
        {Object.entries(galleryData).map(([key, category]) => (
          <div key={key} className="category-card" onClick={() => navigate(`/gallery/${key}`)}>
            <div className="category-cover">
              <img src={category.sessions[0].cover} alt={category.title} />
              <div className="category-overlay">
                <span>{category.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage