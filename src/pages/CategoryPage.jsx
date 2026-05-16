import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/Products'
import ProductCard from '../components/ProductCard'

const categoryMap = {
  products: 'Products',
  wigs: 'Wigs',
  bonnets: 'Bonnets'
}

const CategoryPage = () => {
  const { categoryKey } = useParams()
  const categoryLabel = categoryMap[categoryKey]

  const filteredProducts = useMemo(() => {
    if (!categoryLabel) return []

    return products.filter((product) => {
      if (categoryKey === 'bonnets') {
        return false
      }
      return product.category === categoryLabel
    })
  }, [categoryKey, categoryLabel])

  return (
    <main className="page-content">
      <section className="featured-products">
        <div className="section-header">
          <div>
            <p className="eyebrow">Category</p>
            <h2>{categoryLabel || 'Category not found'}</h2>
          </div>
          <Link to="/" className="secondary-button">
            Back to Home
          </Link>
        </div>
        {categoryLabel ? (
          filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No products are available for this category yet.</h3>
              <p>Check back soon or try another category.</p>
            </div>
          )
        ) : (
          <div className="empty-state">
            <h3>Category not recognized.</h3>
            <p>Select a valid category from the menu.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default CategoryPage
