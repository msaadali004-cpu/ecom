import { Link, useNavigate } from 'react-router-dom'
import placeholder from '../data/images/1.PNG'

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const navigate = useNavigate()
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <main className="page-content">
      <section className="featured-products">
        <div className="section-header">
          <div>
            <p className="eyebrow">Your Cart</p>
            <h2>Review your selected items</h2>
          </div>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-grid">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = placeholder }} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <p className="product-price">
                      {item.price > 0 ? `$${item.price.toFixed(2)}` : 'Contact for price'}
                    </p>
                    <div className="quantity-control">
                      <button type="button" onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button type="button" className="text-button" onClick={() => onRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <aside className="cart-summary">
              <h3>Order summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="summary-note">Ready to complete your order? Shipping and taxes are calculated at checkout.</p>
              <div className="summary-actions">
                <button type="button" className="primary-button" onClick={() => navigate('/checkout')}>
                  Proceed to Checkout
                </button>
                <Link to="/" className="secondary-button">
                  Continue shopping
                </Link>
              </div>
            </aside>
          </div>
        ) : (
          <div className="empty-state">
            <h3>Your cart is empty</h3>
            <p>Start adding items from our shop to begin your order.</p>
            <Link to="/" className="primary-button">
              Shop now
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}

export default Cart
