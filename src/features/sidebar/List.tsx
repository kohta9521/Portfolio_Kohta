import React from "react";

// css import
import styles from "./List.module.css";


// array type
type listItems = {
  id: number;
  text: string;
  link: string;
  icon: string;
};


const List: React.FC = () => {

  // Listの内容を補完する配列
  const listItems: listItems[] = [
    {
      id: 1,
      text: "Home",
      link: "./",
      icon: "Home",
    }
  ]

  return (
    <>
      <div className={styles.list}>
        {
          listItems.map((item, i) => (
            <div className={styles.item}>
              {/* react icons import here */}
              <img src="" alt="react icons" />
              <a href={item.link}>{item.text}</a>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List;