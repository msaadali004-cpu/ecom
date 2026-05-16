import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../data/images/logo-1.png'
import SearchBar from './SearchBar'

const navItems = [
  { label: 'Contact', href: '#footer' }
]

const wigSubcategories = [
  { label: 'Body Wave', slug: 'body-wave' },
  { label: 'Water Wave', slug: 'water-wave' },
  { label: 'Straight', slug: 'straight' },
  { label: 'Deep Wave', slug: 'deep-wave' },
  { label: 'Bob Wigs', slug: 'bob-wigs' },
  { label: 'Tri Color Body Wave', slug: 'tri-color-body-wave' }
]

const categoryItems = [
  { label: 'Products', slug: 'products' },
  { label: 'Wigs', slug: 'wigs' },
  { label: 'Bonnets', slug: 'bonnets' }
]

const Navbar = ({ searchTerm, onSearch, cartCount }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearchChange = (value) => {
    onSearch(value)

    if (value.trim() !== '' && location.pathname !== '/') {
      navigate('/')
    }
  }

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      navigate('/')
    }
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsHeaderHidden(true)
      } else {
        setIsHeaderHidden(false)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${isHeaderHidden ? 'navbar-hidden' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="brand" aria-label="JTS Beauty home">
            <img src={logo} alt="JTS Beauty logo" className="brand-image" />
            <span className="brand-text">JTS Beauty</span>
          </Link>
          <button
            type="button"
            className="navbar-search-toggle"
            aria-expanded={showSearch}
            aria-label={showSearch ? 'Hide search' : 'Open search'}
            onClick={() => {
              setShowSearch((open) => !open)
              setMenuOpen(false)
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            className={`navbar-search ${showSearch ? 'search-open' : ''}`}
          />
          <button
            type="button"
            className="navbar-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => {
              setMenuOpen((open) => !open)
              setShowSearch(false)
            }}
          >
            <span className="navbar-toggle-icon" />
          </button>
        </div>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-dropdown-trigger">
              Categories
            </button>
            <div className="nav-dropdown-panel">
              {categoryItems.map((item) => (
                <Link
                  key={item.label}
                  to={`/category/${item.slug}`}
                  className="nav-dropdown-item"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-dropdown-trigger">
              Wig Styles
            </button>
            <div className="nav-dropdown-panel">
              {wigSubcategories.map((subcategory) => (
                <Link
                  key={subcategory.label}
                  to={`/wig-style/${subcategory.slug}`}
                  className="nav-dropdown-item"
                >
                  {subcategory.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/appointment" className="nav-link" onClick={() => setMenuOpen(false)}>
            Appointment
          </Link>
          <Link to="/cart" className="nav-link nav-cart-link" onClick={() => setMenuOpen(false)}>
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
