import { useContext, useState, useEffect } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import Button from '../Button/Button'
import style from './CartIcon.module.css'
import CartContext from '../../../store/cart-context'

const CartIcon = (props) => {
  const [bumpBtn, setBumpBtn] = useState(false)
  const cartCtx = useContext(CartContext)
  const numberOfCartItem = cartCtx.items.length
  const btnClasses = `${style.cart} ${bumpBtn ? style.bump : ''}`

  const { items } = cartCtx
  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBumpBtn(true)

    const timer = setTimeout(() => {
      setBumpBtn(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
    <Button className={btnClasses} onClick={props.onClick}>
      <span>Your Cart</span>
      <TiShoppingCart className={style.cartIcon} />
      <p className={style.cartAmount}>{numberOfCartItem}</p>
    </Button>
  )
}

export default CartIcon
