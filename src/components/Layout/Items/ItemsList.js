import { items } from '../../../data/itemsData'
import Item from './Item'

import style from './ItemsList.module.css'

const ItemsList = () => {
  return (
    <ul className={style.cartlist}>
      {items.map((item) => (
        <Item
          key={item.filename}
          title={item.title}
          price={item.price}
          desc={item.description}
          imglink={item.filename}
        />
      ))}
    </ul>
  )
}

export default ItemsList
