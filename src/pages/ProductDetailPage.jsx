import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import products from '../data/Products'
import placeholder from '../data/images/1.PNG'

const ProductDetailPage = ({ onAddToCart }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = useMemo(() => products.find((item) => item.id === id), [id])
  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0])
    }
  }, [product])

  if (!product) {
    return (
      <main className="page-content">
        <section className="product-detail empty-state">
          <h2>Product not found</h2>
          <p>We couldn't locate the item you were looking for.</p>
          <button className="primary-button" type="button" onClick={() => navigate('/')}>Shop home</button>
        </section>
      </main>
    )
  }

  return (
    <main className="page-content">
      <section className="product-detail">
        <div className="detail-panel">
          <div className="detail-gallery">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="detail-main-image"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = placeholder
              }}
            />
            {product.images.length > 1 && (
              <div className="detail-thumbs">
                {product.images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${product.name} ${index + 1}`}
                    className={selectedImage === src ? 'thumb-active' : ''}
                    onMouseEnter={() => setSelectedImage(src)}
                    onFocus={() => setSelectedImage(src)}
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = placeholder
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="detail-copy">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="detail-price">
              {product.price > 0 ? `$${product.price.toFixed(2)}` : 'Contact for price'}
            </p>
            <p className="detail-description">{product.description}</p>
            <div className="detail-actions">
              <button
                className="primary-button"
                type="button"
                onClick={() => onAddToCart(product)}
              >
                Add to bag
              </button>
              <Link to="/" className="secondary-button">
                Continue shopping
              </Link>
            </div>
            <button className="text-button" type="button" onClick={() => navigate(-1)}>
              Back to shop
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage
