import ReactDOM from 'react-dom'

import style from './Model.module.css'

const Drapdown = (props) => {
  return <div className={style.Drapdown} onClick={props.onClick}></div>
}

const ModelOverlay = (props) => {
  return (
    <div className={`${style.modelOverlay} ${props.className}`}>
      {props.children}
    </div>
  )
}

const Model = (props) => {
  const modelRoot = document.getElementById('model')
  return (
    <>
      {ReactDOM.createPortal(<Drapdown onClick={props.onClick} />, modelRoot)}
      {ReactDOM.createPortal(
        <ModelOverlay className={props.className}>
          {props.children}
        </ModelOverlay>,
        modelRoot
      )}
    </>
  )
}

export default Model
