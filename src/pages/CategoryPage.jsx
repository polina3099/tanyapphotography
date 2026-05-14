import { useNavigate, useParams } from 'react-router-dom'
import { galleryData } from '../data/gallery'
import './Pages.css'

function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const data = galleryData[category]

  if (!data) return <div className="page"><p>Category not found</p></div>

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-sub cursor" onClick={() => navigate('/gallery')}>← Gallery</p>
        <h1 className="page-title">{data.title}</h1>
      </div>
      <div className="category-grid">
        {data.sessions.map(session => (
          <div key={session.id} className="category-card" onClick={() => navigate(`/gallery/${category}/${session.id}`)}>
            <div className="category-cover">
              <img src={session.cover} alt={session.title} />
              <div className="category-overlay">
                <span>{session.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage