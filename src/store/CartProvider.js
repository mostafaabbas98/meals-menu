import { useReducer } from 'react'
import CartContext from './cart-context'

const initialCart = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingItem = state.items[existingItemIndex]
    let updatingItems
    if (existingItem) {
      const updatingItem = { ...existingItem, amount: existingItem.amount + 1 }
      updatingItems = [...state.items]
      updatingItems[existingItemIndex] = updatingItem
    } else {
      updatingItems = state.items.concat(action.item)
    }

    return { items: updatingItems, totalAmount: newTotalAmount }
  }
  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    )
    const existingItem = state.items[existingItemIndex]
    const newTotalAmount = state.totalAmount - existingItem.price
    let updatingItems
    if (existingItem.amount === 1) {
      updatingItems = state.items.filter((item) => item.id !== action.id)
    } else {
      const updatingItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatingItems = [...state.items]
      updatingItems[existingItemIndex] = updatingItem
    }

    return { items: updatingItems, totalAmount: newTotalAmount }
  }
  if (action.type === 'CLEARCART') {
    return initialCart
  }
  return initialCart
}

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCart)

  const AddItemToCart = (item) => {
    dispatchCart({ type: 'ADD', item: item })
  }

  const DeleteItemFromCart = (id) => {
    dispatchCart({ type: 'REMOVE', id: id })
  }

  const ClearCart = () => {
    dispatchCart({ type: 'CLEARCART' })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemToCart,
    removeItem: DeleteItemFromCart,
    clearCart: ClearCart,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
