import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Price from './components/Price'
import Contact from './components/Contact'
import GalleryPage from './pages/GalleryPage'
import CategoryPage from './pages/CategoryPage'
import SessionPage from './pages/SessionPage'
import ContactPage from './pages/ContactPage'
import ReviewsPage from './pages/ReviewsPage'
import WhatsAppButton from './components/WhatsAppButton'

function HomePage() {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Price />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:category" element={<CategoryPage />} />
        <Route path="/gallery/:category/:sessionId" element={<SessionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App