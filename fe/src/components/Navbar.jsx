import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../data/images/logo-1.jpeg'
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

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <Link to="/" className="brand" aria-label="JTS Beauty home">
            <img src={logo} alt="JTS Beauty logo" className="brand-image" />
            <span className="brand-text">JTS Beauty</span>
          </Link>
          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            className="navbar-search"
          />
        </div>

        <nav className="nav-links">
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
          <Link to="/appointment" className="nav-link">
            Appointment
          </Link>
          <Link to="/cart" className="nav-link nav-cart-link">
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
