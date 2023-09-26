import React from 'react'

// css import
import styles from './styles/Modal.module.scss'


// // props tpe
// type Props = {
//   show: boolean;
//   setShow: any
// }


const Modal = (props: { show: boolean; setShow: any }) => {
  const closeModal = () => {
    props.setShow(false)
  }
  if (props.show) {
    return (
      <div id="overlay" className={styles.overlay}>
        <div id="content" className={styles.content}>
          <p>this is modal window</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal;