import { useContext } from 'react'
import Button from '../../UI/Button/Button'
import style from './Item.module.css'
import CartContext from '../../../store/cart-context'

const Item = ({ title, price, desc, imglink }) => {
  const cartCtx = useContext(CartContext)

  const addItemToCartHandler = (e) => {
    cartCtx.addItem({
      id: imglink,
      title: title,
      price: price,
      amount: 1,
      imglink: imglink,
    })
  }

  return (
    <div className={style.card}>
      <div className={style['card-header']}>
        <img src={`${require('../../../images/' + imglink)}`} alt={title} />
      </div>
      <div className={style['card-body']}>
        <span className={style['item-price']}>${price}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Button
          type='submit'
          onClick={addItemToCartHandler}
          className={style.cartBtn}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default Item
