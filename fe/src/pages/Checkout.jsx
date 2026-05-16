import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = ({ cartItems, onClearCart }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage(`Thanks ${name}! Your order of ${cartItems.length} item(s) has been placed.`)
    onClearCart()
    setName('')
    setEmail('')
    setAddress('')
    setCity('')
    setZip('')
  }

  return (
    <main className="page-content">
      <section className="featured-products">
        <div className="section-header">
          <div>
            <p className="eyebrow">Checkout</p>
            <h2>Complete your order</h2>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-state">
            <h3>Your cart is currently empty</h3>
            <p>Add items to checkout, or return to shopping.</p>
            <button className="primary-button" type="button" onClick={() => navigate('/')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="checkout-grid">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <label>
                Full name
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                Shipping address
                <input
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  required
                />
              </label>
              <label>
                City
                <input
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  required
                />
              </label>
              <label>
                Zip code
                <input
                  type="text"
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                  required
                />
              </label>
              <button className="primary-button" type="submit">
                Place Order
              </button>
              {message && <p className="success-message">{message}</p>}
            </form>

            <aside className="checkout-summary">
              <div className="summary-header">
                <h3>Order summary</h3>
                <p className="summary-description">Review your selected items, pricing, and the final order total before submitting.</p>
              </div>
              <div className="summary-row summary-count">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <div>
                      <div className="checkout-item-name">{item.name}</div>
                      <div className="checkout-item-meta">{item.quantity} × ${item.price.toFixed(2)}</div>
                    </div>
                    <span>${(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="summary-note">You will receive an email confirmation after placing your order.</p>
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}

export default Checkout
