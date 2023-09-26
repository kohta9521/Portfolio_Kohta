import React from 'react'

// css import
import styles from './styles/Madal.module.scss'

const Modal = () => {
  return (
    <div className={styles.overlay} id="overlay">
      <div className={styles.content}>
        <p>this is modal window</p>
        <p>
          <button>Close</button>
        </p>
      </div>
    </div>
  )
}

export default Modal
