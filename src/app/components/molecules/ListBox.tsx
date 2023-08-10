import React, { FC } from "react";

// css import
import styles from "./styles/ListBox.module.css";
import List from "../atoms/List";


const ListBox: React.FC = () => {
  return (
    <div className={styles.listBox}>
      <List  id={0} text="Home" link="/" color="white" size="medium" />
      <List  id={1} text="About" link="#about" color="white" size="medium" />
      <List  id={1} text="Blog" link="#blog" color="white" size="medium" />
      <List  id={2} text="Work" link="#work" color="white" size="medium" />
      <List  id={4} text="Contact" link="#contact" color="white" size="medium" />
    </div>
  )
}

export default ListBox;