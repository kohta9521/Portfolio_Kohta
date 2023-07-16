import React from "react";

// import reacticons
import { FaGithub, FaFacebookSquare, FaTwitterSquare  } from "react-icons/fa";

// css import
import styles from "./SnsBox.module.css";

// array type
type snsList = {
  id: number;
  icon: React.ReactElement;
  link: string;
  notUseText: string;
}


const SnsBox: React.FC = () => {

  // snsList array
  const snsList: snsList[] = [
    {
      id: 1,
      icon: <FaGithub className={styles.icon} />,
      link: "",
      notUseText: "github"
    },
    {
      id: 2,
      icon: <FaFacebookSquare className={styles.icon}  />,
      link: "",
      notUseText: "facebook"
    },
    {
      id: 3,
      icon: <FaTwitterSquare className={styles.icon}  />,
      link: "",
      notUseText: "twitter"
    },
  ]

  return (
    <>
      <div className={styles.snsbox}>
        {
          snsList.map((item, i) => (
            <div className={styles.snsItem}>
              <a className={styles.snsLink} key={item.id} href={item.link}>{item.icon}</a>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SnsBox;
