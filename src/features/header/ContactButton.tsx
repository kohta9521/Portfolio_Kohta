import React from "react";

// css import
import styles from "./ContactButton.module.css";


const ContactButton: React.FC = () => {
  return (
    <>
      <div className={styles.buttonArea}>
        <a className={styles.button} href="">
          CONTACT
        </a>
      </div>
    </>
  )
}

export default ContactButton;