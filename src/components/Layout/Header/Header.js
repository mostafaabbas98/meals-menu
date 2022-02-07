import style from './Header.module.css'
import Logo from '../../UI/Logo/Logo'
import CartIcon from '../../UI/CartIcon/CartIcon'

const Header = ({ onOpenCart }) => {
  return (
    <header className={style.header}>
      <Logo />
      <CartIcon onClick={onOpenCart} />
    </header>
  )
}

export default Header
