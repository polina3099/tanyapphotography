import './Price.css'
const categories = [
  // Ряд 1
  {
    id: 1,
    name: 'Family',
    price: '200$',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    includes: [
      '1 hour photoshoot',
      'Photos are ready during 2 weeks',
      '70+ edited photos',
      'Home or outside',
      'Assistance with choosing outfits, location and references'
    ]
  },
  {
    id: 2,
    name: 'Newborn',
    price: '200$',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80',
    includes: [
      '1 hour photoshoot',
      'Photos are ready during 2 weeks',
      '70+ edited photos',
      'Home or outside',
      'Assistance with choosing outfits, location and references'
    ]
  },
  {
    id: 3,
    name: 'Pregnancy',
    price: '200$',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    includes: [
      '1 hour photoshoot',
      'Photos are ready during 2 weeks',
      '70+ edited photos',
      'Home or outside',
      'Assistance with choosing outfits, location and references'
    ]
  },
  // Ряд 2
  {
    id: 4,
    name: 'Wedding · Package 1',
    price: '100.000 kr',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    includes: [
      '2-3 hours photoshoot',
      '150+ edited photos',
      'First photos during 2 days',
      'All photo gallery during 3 weeks'
    ]
  },
  {
    id: 5,
    name: 'Wedding · Package 2',
    price: '180.000 kr',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    includes: [
      'Up to 5 hours photoshoot',
      '250+ edited photos',
      'First photos during 2 days',
      'All photo gallery during 3 weeks'
    ]
  },
  {
    id: 6,
    name: 'Wedding · Package 3',
    price: '270.000 kr',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    includes: [
      'Up to 10 hours photoshoot',
      '400+ photos',
      'First photos during 2 days',
      'Full photo gallery during 4 weeks'
    ]
  },
  // Ряд 3
  {
    id: 7,
    name: 'Ferming',
    price: 'On request',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    includes: [
      'Coming soon...'
    ]
  },
  {
    id: 8,
    name: 'Birthday',
    price: 'On request',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    includes: [
      'Coming soon...'
    ]
  },
  {
    id: 9,
    name: 'Skirn',
    price: 'On request',
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80',
    includes: [
      'Coming soon...'
    ]
  }
]

function Price() {
  return (
    <section className="price-section" id="price">
      <div className="price-header">
        <p className="price-sub">— investment —</p>
        <h2 className="price-title">Price List</h2>
      </div>
      <div className="price-grid">
        {categories.map(pkg => (
          <div key={pkg.id} className="price-card">
            <div className="price-card-photo">
              <img src={pkg.image} alt={pkg.name} />
            </div>
            <div className="price-card-info">
              <h3>{pkg.name}</h3>
              <ul>
                {pkg.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="price-amount">{pkg.price}</p>
        
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Price