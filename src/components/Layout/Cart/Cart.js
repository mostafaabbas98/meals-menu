import { useContext } from 'react'
import Model from '../../UI/Model/Model'
import Button from '../../UI/Button/Button'
import CartContext from '../../../store/cart-context'
import CartItem from './CartItem'

import style from './Cart.module.css'

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext)

  const addOneItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const removeOneItem = (id) => {
    cartCtx.removeItem(id)
  }

  const clearCart = () => {
    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={style['cart-item']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.imglink}
            amount={item.amount}
            onAdd={addOneItem.bind(null, item)}
            onDelete={removeOneItem.bind(null, item.id)}
          />
        )
      })}
    </ul>
  )

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const hasEmptyCart = cartCtx.items.length !== 0
  return (
    <Model onClick={onCloseCart} className={style.cart}>
      {hasEmptyCart ? (
        <div className={style.cartItem}>{cartItems}</div>
      ) : (
        <h1 className={style.noItems}>No Items in cart</h1>
      )}

      {hasEmptyCart && (
        <p className={style.cartAmount}>Total Amount: {totalAmount}</p>
      )}
      <div className={style.cartBtn}>
        <Button onClick={onCloseCart}>Close</Button>
        {hasEmptyCart && <Button onClick={clearCart}>Order</Button>}
      </div>
    </Model>
  )
}

export default Cart
