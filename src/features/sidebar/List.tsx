import React from "react";

// react icons import
import { FaHome } from "react-icons/fa";

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
    }
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