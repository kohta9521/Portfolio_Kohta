import React from "react";

// react icons import
import { FaHome, FaUserAlt, FaCode, FaDesktop, FaPenAlt, FaPaperPlane } from "react-icons/fa";

// css import
import styles from "./List.module.css";


// array type
type listItems = {
  id: number;
  text: string;
  link: string;
  icon: React.ReactElement;
};


const List: React.FC = () => {

  // Listの内容を補完する配列
  const listItems: listItems[] = [
    {
      id: 1,
      text: "Home",
      link: "./",
      icon: <FaHome className={styles.icon} />,
    },
    {
      id: 2,
      text: "Profile",
      link: "./",
      icon: <FaUserAlt className={styles.icon}  />,
    },
    {
      id: 3,
      text: "Skill",
      link: "./",
      icon: <FaCode className={styles.icon}  />,
    },
    {
      id: 4,
      text: "Work",
      link: "./",
      icon: <FaDesktop className={styles.icon}  />,
    },
    {
      id: 5,
      text: "Blog",
      link: "./",
      icon: <FaPenAlt className={styles.icon}  />,
    },
    {
      id: 6,
      text: "Contact",
      link: "./",
      icon: <FaPaperPlane className={styles.icon}  />,
    },
  ]

  return (
    <>
      <div className={styles.list}>
        {
          listItems.map((item, i) => (
            <div className={styles.item}>
              {item.icon}
              <a className={styles.link} key={i} href={item.link}>{item.text}</a>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List;