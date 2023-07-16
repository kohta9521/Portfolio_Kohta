import React from "react";

// css import
import styles from "./SnsBox.module.css";

// array type
type snsList = {
  id: number;
  img: string;
  link: string;
}


const SnsBox: React.FC = () => {

  // snsList array
  const snsList: snsList[] = [
    {
      id: 1,
      img: "",
      link: "",
    }
  ]

  return (
    <>
      <div className={styles.snsbox}>
        {
          snsList.map((item, i) => (
            <div className={styles.snsItem}>
              <a className={styles.snsLink} key={item.id} href={item.link}><img src={item.img} alt="snsLink" /></a>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SnsBox;
