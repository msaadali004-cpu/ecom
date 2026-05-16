import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/Products'
import heroImage from '../data/images/1.PNG'
import ProductCard from '../components/ProductCard'

const Home = ({ searchTerm, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [wigFilter, setWigFilter] = useState('All')

  const categories = ['All', 'Products', 'Wigs', 'Bonnets']

  const wigCategories = ['All', 'Body Wave', 'Water Wave', 'Straight', 'Deep Wave', 'Bob Wigs', 'Tri Color Body Wave']

  useEffect(() => {
    if (searchTerm.trim() !== '' && activeCategory !== 'All') {
      setActiveCategory('All')
      setWigFilter('All')
    }
  }, [searchTerm, activeCategory])

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All'
          ? true
          : activeCategory === 'Products'
          ? product.category === 'Products'
          : activeCategory === 'Wigs'
          ? product.category === 'Wigs' || product.category === 'Bob Wigs'
          : activeCategory === 'Bonnets'
          ? product.category === 'Bonnets'
          : false

      const matchesSearch =
        search === '' ||
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)

      const matchesWigFilter =
        activeCategory === 'Wigs' && wigFilter !== 'All'
          ? product.name.toLowerCase().includes(wigFilter.toLowerCase()) ||
            product.description.toLowerCase().includes(wigFilter.toLowerCase())
          : true

      return matchesCategory && matchesSearch && matchesWigFilter
    })
  }, [activeCategory, searchTerm, wigFilter])

  const hasSearch = searchTerm.trim() !== ''

  return (
    <main className="page-content">
      <section className="promo-strip">
        <p>Free shipping on orders over $50 • Book a styling appointment online</p>
      </section>

      {hasSearch ? (
        <section className="featured-products" id="shop">
          <div className="section-header">
            <div>
              <p className="eyebrow">Search Results</p>
              <h2>Results for “{searchTerm}”</h2>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products match your search.</h3>
              <p>Try another term or refine your query.</p>
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="hero hero-premium" id="home">
            <div className="hero-copy">
              <span className="eyebrow">Luxury Wigs & Styling Essentials</span>
              <h1>Discover premium wigs, serums, and styling tools for standout glamour.</h1>
              <p className="hero-description">
                Shop curated wig collections, explore our best sellers, and book an appointment with an expert stylist.
              </p>
              <div className="hero-actions">
                <a href="#shop" className="primary-button">
                  Shop Best Sellers
                </a>
                <Link to="/appointment" className="secondary-button">
                  Book Appointment
                </Link>
              </div>
              <div className="hero-stat-grid">
                <div>
                  <strong>Premium hair</strong>
                  <p>Soft, natural textures designed to last.</p>
                </div>
                <div>
                  <strong>Quick delivery</strong>
                  <p>Fast shipping on every fresh order.</p>
                </div>
                <div>
                  <strong>Expert styling</strong>
                  <p>Support and appointments with pros.</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-card">
                <img src={heroImage} alt="Premium wig" />
              </div>
            </div>
          </section>

          <section className="category-strip" id="collections">
            <div className="section-heading">
              <p className="eyebrow">Explore collections</p>
              <h2>Shop by style, shade, and shape</h2>
            </div>
            <div className="collection-row">
              {['Long Wigs', 'Blonde', 'Brown', 'Black', 'Specialty'].map((category) => (
                <Link key={category} to="/category/products" className="collection-card">
                  <span>{category}</span>
                  <p>Shop the latest {category.toLowerCase()} looks</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="featured-products" id="shop">
            <div className="section-header section-header-compact">
              <div>
                <p className="eyebrow">Featured Picks</p>
                <h2>Our best sellers for every style</h2>
              </div>
              <div className="category-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(category)
                      if (category !== 'Wigs') setWigFilter('All')
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {activeCategory === 'Wigs' && (
              <div className="wig-category-panel" id="wig-categories">
                <p className="eyebrow">Wig categories</p>
                <div className="category-list wig-category-list">
                  {wigCategories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`category-pill ${wigFilter === category ? 'active' : ''}`}
                      onClick={() => setWigFilter(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="product-grid product-grid-large">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No products match your search.</h3>
                <p>Try another term or browse through the collections.</p>
              </div>
            )}
          </section>

          <section className="newsletter-card">
            <div>
              <span className="eyebrow">Stay in the loop</span>
              <h2>Join our list for exclusive launch access</h2>
              <p>Be first to know about new wig drops, beauty restocks, and appointment openings.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="button" className="primary-button">Unlock My Welcome Gift</button>
            </form>
          </section>
        </>
      )}
    </main>
  )
}

export default Home







