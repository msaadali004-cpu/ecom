import { Link } from 'react-router-dom'
import placeholder from '../data/images/1.PNG'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="card-link">
        <div className="product-thumb">
          <img
            src={product.images[0]}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = placeholder
            }}
            loading="lazy"
          />
        </div>
        <div className="product-meta">
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">
              {product.price > 0 ? `$${product.price.toFixed(2)}` : 'Contact for price'}
            </span>
            <span className="view-link">View</span>
          </div>
        </div>
      </Link>
      {onAddToCart && (
        <button
          className="secondary-button card-add-button"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </button>
      )}
    </article>
  )
}

export default ProductCard
