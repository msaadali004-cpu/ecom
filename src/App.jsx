import { useMemo, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailPage from './pages/ProductDetailPage'
import Appointment from './pages/Appointment'
import CategoryPage from './pages/CategoryPage'
import WigStylePage from './pages/WigStylePage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems]
  )

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id)
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.images[0],
          quantity: 1
        }
      ]
    })
  }

  const handleUpdateCartQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const handleClearCart = () => setCartItems([])

  return (
    <div className="app-shell">
      <Router>
        <Navbar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          cartCount={cartCount}
        />
        <Routes>
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} onAddToCart={handleAddToCart} />}
          />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/category/:categoryKey" element={<CategoryPage />} />
          <Route path="/wig-style/:styleKey" element={<WigStylePage />} />
          <Route
            path="/product/:id"
            element={<ProductDetailPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateCartQuantity}
                onRemoveItem={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cartItems} onClearCart={handleClearCart} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
