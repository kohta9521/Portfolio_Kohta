import React, { FC } from 'react';

// css import
import styles from "./styles/Button.module.css";


// props type
type Props = {
  id: number,
}


const Button: React.FC = () => {
  return (
    <a className={`${styles.button}`}>

    </a>
  )
}

export default Button;