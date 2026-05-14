import './ReviewsPage.css'

const reviews = [
  {
    id: 1,
    name: 'Anna & Michael',
    category: 'Wedding',
    date: 'September 2024',
    text: 'Tanya captured our wedding day perfectly. Every photo tells a story and brings back all the emotions of that special day. We could not be happier with the results!',
    stars: 5
  },
  {
    id: 2,
    name: 'The Johnson Family',
    category: 'Family',
    date: 'August 2024',
    text: 'We had such a wonderful experience! Tanya was patient with our kids and managed to capture genuine moments of joy. The photos are absolutely stunning.',
    stars: 5
  },
  {
    id: 3,
    name: 'Sarah',
    category: 'Pregnancy',
    date: 'July 2024',
    text: 'I was nervous about my maternity shoot but Tanya made me feel so comfortable and beautiful. The photos are magical — I will treasure them forever.',
    stars: 5
  },
  {
    id: 4,
    name: 'Tom & Emma',
    category: 'Wedding',
    date: 'June 2024',
    text: 'From the first message to the final gallery, working with Tanya was an absolute pleasure. She has an incredible eye for light and emotion.',
    stars: 5
  },
  {
    id: 5,
    name: 'The Williams Family',
    category: 'Newborn',
    date: 'May 2024',
    text: 'Tanya photographed our newborn with so much care and gentleness. The photos are breathtaking and we are so grateful for these memories.',
    stars: 5
  },
  {
    id: 6,
    name: 'Lisa & David',
    category: 'Wedding',
    date: 'April 2024',
    text: 'Tanya travelled across Iceland to photograph our intimate wedding. She blended into the background and captured the most authentic moments.',
    stars: 5
  }
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

function ReviewsPage() {
  return (
    <div className="reviews-page">
      <div className="reviews-header">
        <p className="reviews-sub">— kind words —</p>
        <h1 className="reviews-title">Client Reviews</h1>
        <p className="reviews-desc">Words from the people I've had the pleasure of working with</p>
      </div>

      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <Stars count={review.stars} />
            <p className="review-text">"{review.text}"</p>
            <div className="review-footer">
              <p className="review-name">{review.name}</p>
              <p className="review-meta">{review.category} · {review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsPage