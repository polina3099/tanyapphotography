import './Gallery.css'

const photos = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
  'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=600&q=80',
  'https://images.unsplash.com/photo-1488116654804-b1dfc69e900b?w=600&q=80',
]

// Дублируем для бесконечного эффекта
const allPhotos = [...photos, ...photos]

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="slider-wrapper">
        <div className="slider-track">
          {allPhotos.map((url, i) => (
            <div key={i} className="slide">
              <img src={url} alt={`photo-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery