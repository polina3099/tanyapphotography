import { useNavigate, useParams } from 'react-router-dom'
import { galleryData } from '../data/gallery'
import './Pages.css'

function SessionPage() {
  const { category, sessionId } = useParams()
  const navigate = useNavigate()
  const data = galleryData[category]
  const session = data?.sessions.find(s => s.id === sessionId)

  if (!session) return <div className="page"><p>Session not found</p></div>

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-sub cursor" onClick={() => navigate(`/gallery/${category}`)}>← {data.title}</p>
        <h1 className="page-title">{session.title}</h1>
      </div>
      <div className="session-grid">
        {session.photos.map((photo, i) => (
          <div key={i} className="session-photo">
            <img src={photo} alt={`${session.title} ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SessionPage