import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const pages = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function Navigation() {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Northstar home">
        <span className="brand-mark" aria-hidden="true">N</span>
        <span>Northstar</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {pages.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={pathname === path ? 'nav-link active' : 'nav-link'}
            aria-current={pathname === path ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

function Home() {
  return (
    <main className="page home-page">
      <div className="eyebrow"><span className="eyebrow-dot" /> A little space to explore</div>
      <h1>Good things<br />start <span>somewhere.</span></h1>
      <p className="page-copy">
        Welcome to Northstar. Take a look around and get to know what we’re all about.
      </p>
      <Link className="primary-link" to="/about">
        Discover our story <span aria-hidden="true">→</span>
      </Link>
      <div className="home-note"><span>01</span> HOME · ABOUT · CONTACT</div>
      <div className="sun-art" aria-hidden="true">
        <div className="sun" />
        <div className="hill hill-back" />
        <div className="hill hill-front" />
      </div>
    </main>
  )
}

function About() {
  return (
    <main className="page text-page">
      <div className="eyebrow"><span className="eyebrow-dot" /> A bit about us</div>
      <h1>Curious by<br /><span>nature.</span></h1>
      <p className="page-copy">
        Northstar is a place for thoughtful ideas and fresh perspectives. We believe
        the best journeys begin with curiosity, a little courage, and room to grow.
      </p>
      <p className="page-copy secondary-copy">
        This small corner of the web is built to help you find your way. We’re glad
        you’re here.
      </p>
      <Link className="text-link" to="/contact">Come say hello <span aria-hidden="true">→</span></Link>
      <div className="page-index">02 <span>/</span> 03</div>
    </main>
  )
}

function Contact() {
  return (
    <main className="page text-page">
      <div className="eyebrow"><span className="eyebrow-dot" /> Your turn</div>
      <h1>Let’s start<br /><span>a conversation.</span></h1>
      <p className="page-copy">
        Have a question, an idea, or just want to say hello? We’d love to hear from you.
      </p>
      <a className="primary-link" href="mailto:hello@northstar.example">
        hello@northstar.example <span aria-hidden="true">↗</span>
      </a>
      <Link className="text-link back-link" to="/">Back to home <span aria-hidden="true">→</span></Link>
      <div className="page-index">03 <span>/</span> 03</div>
    </main>
  )
}

function NotFound() {
  return (
    <main className="page text-page">
      <div className="eyebrow"><span className="eyebrow-dot" /> Off the map</div>
      <h1>Page not<br /><span>found.</span></h1>
      <p className="page-copy">We couldn’t find that page. Let’s get you back on track.</p>
      <Link className="primary-link" to="/">Return home <span aria-hidden="true">→</span></Link>
    </main>
  )
}

function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer">
        <span>© 2025 NORTHSTAR</span>
        <span>MADE FOR THE JOURNEY <span className="footer-star">✳</span></span>
      </footer>
    </div>
  )
}

export default App
