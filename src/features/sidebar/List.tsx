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
      icon: <FaHome />,
    },
    {
      id: 2,
      text: "Profile",
      link: "./",
      icon: <FaUserAlt />,
    },
    {
      id: 3,
      text: "Skill",
      link: "./",
      icon: <FaCode />,
    },
    {
      id: 4,
      text: "Work",
      link: "./",
      icon: <FaDesktop />,
    },
    {
      id: 5,
      text: "Blog",
      link: "./",
      icon: <FaPenAlt />,
    },
    {
      id: 6,
      text: "Contact",
      link: "./",
      icon: <FaPaperPlane />,
    },
  ]

  return (
    <>
      <div className={styles.list}>
        {
          listItems.map((item, i) => (
            <div className={styles.item}>
              {/* react icons import here */}
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