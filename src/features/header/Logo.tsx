import React from "react";

// css imoprt
import styles from  "./Logo.module.css";


const Logo: React.FC = () => {
  return (
    <>
      <div className={styles.logoArea}>
        <h1 className={styles.logoText}>
          K Code
        </h1>
      </div>
    </>
  )
}

export default Logo;