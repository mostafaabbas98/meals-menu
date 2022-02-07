import Button from '../../UI/Button/Button'
import style from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <div className={style.cartItem} key={props.id}>
      <div className={style.itemImg}>
        <img
          src={`${require('../../../images/' + props.img)}`}
          alt={props.title}
        />
      </div>
      <div className={style.itemContent}>
        <h4>{props.title}</h4>
        <p>${props.price.toFixed(2)}</p>
      </div>
      <div className={style.itemControl}>
        <Button className={style.btn} onClick={props.onDelete}>
          -
        </Button>
        <p>{props.amount}</p>
        <Button className={style.btn} onClick={props.onAdd}>
          +
        </Button>
      </div>
    </div>
  )
}

export default CartItem
