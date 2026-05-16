import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/Products'
import ProductCard from '../components/ProductCard'

const styleMap = {
  'body-wave': 'Body Wave',
  'water-wave': 'Water Wave',
  straight: 'Straight',
  'deep-wave': 'Deep Wave',
  'bob-wigs': 'Bob Wigs',
  'tri-color-body-wave': 'Tri Color Body Wave'
}

const WigStylePage = () => {
  const { styleKey } = useParams()
  const styleLabel = styleMap[styleKey]

  const filteredProducts = useMemo(() => {
    if (!styleLabel) return []

    return products.filter((product) => {
      if (styleKey === 'bob-wigs') {
        return product.category === 'Bob Wigs'
      }
      return (
        product.name.toLowerCase().includes(styleLabel.toLowerCase()) ||
        product.description.toLowerCase().includes(styleLabel.toLowerCase())
      )
    })
  }, [styleKey, styleLabel])

  return (
    <main className="page-content">
      <section className="featured-products">
        <div className="section-header">
          <div>
            <p className="eyebrow">Wig Style</p>
            <h2>{styleLabel || 'Wig style not found'}</h2>
          </div>
          <Link to="/" className="secondary-button">
            Back to Home
          </Link>
        </div>
        {styleLabel ? (
          filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No matching wigs were found for this style.</h3>
              <p>Try another wig style or browse the full collection.</p>
            </div>
          )
        ) : (
          <div className="empty-state">
            <h3>Wig style not recognized.</h3>
            <p>Select a valid wig style from the menu.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default WigStylePage
