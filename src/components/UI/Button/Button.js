import style from './Button.module.css'

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${props.className} ${style['btn-grad']}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
