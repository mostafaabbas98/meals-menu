import { useState } from 'react'
import style from './App.module.css'
import Cart from './components/Layout/Cart/Cart'
import Header from './components/Layout/Header/Header'
import ItemsList from './components/Layout/Items/ItemsList'
import CartProvider from './store/CartProvider'

function App() {
  const [showCart, setShowCart] = useState(false)

  const openCartHandler = () => {
    setShowCart(true)
  }

  const closeCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      <div className={style.App}>
        {showCart && <Cart onCloseCart={closeCartHandler} />}
        <Header onOpenCart={openCartHandler} />
        <ItemsList />
      </div>
    </CartProvider>
  )
}

export default App
