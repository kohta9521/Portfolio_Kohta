import React, { FC } from "react";

// css import
import styles from "./styles/ListItem.module.css";

// prps type
type Props = {
  listNumber: number
}

// type
type List = {
  id: number,
  text: string,
  link: string,
}


const ListItem: React.FC<Props> = ({ listNumber  }) => {
  // 情報内容
  const headerItems: List[] = [
    {
      id: 1,
      text: "HOME",
      link: "/",
    },
    {
      id: 2,
      text: "ABOUT",
      link: "#about",
    },
    {
      id: 3,
      text: "CAREER",
      link: "#career",
    },
    {
      id: 4,
      text: "WORK",
      link: "#work",
    },
    {
      id: 5,
      text: "PORTFOLIO",
      link: "#portfolio",
    },
    {
      id: 6,
      text: "BLOG",
      link: "#blog",
    },
    {
      id: 7,
      text: "CONTACT",
      link: "#contact",
    },
  ]

  const selectHeaderItem = headerItems[listNumber - 1];

  return (
    <div className={styles.listBox} key={selectHeaderItem.id}>
      <a className={styles.listLink} href={selectHeaderItem.link}>
        {selectHeaderItem.text}
      </a>
    </div>
  )
}

export default ListItem;