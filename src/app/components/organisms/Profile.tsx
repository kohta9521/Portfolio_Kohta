import React, { FC } from "react";

// css import
import styles from "./styles/Profile.module.css";
import Title from "../atoms/Title";
import { link } from "fs";
import Button from "../atoms/Button";


const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Title id={0} idtext="profile" text="My Profile" align="left" />
      <div className={styles.flexBox}>
        <div className={styles.imgBox}>
         <img className={styles.img} src="/img/profile.jpg" alt="profile画像" />
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, beatae voluptat
            um cupiditate aut dolore, esse quaerat possimus eaque sit sapiente sequi repu
            diandae, magnam nostrum magni molestias dolor dignissimos vero dolores.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, beatae voluptat
            um cupiditate aut dolore, esse quaerat possimus eaque sit sapiente sequi repu
            diandae, magnam nostrum magni molestias dolor dignissimos vero dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, beatae voluptat
            um cupiditate aut dolore, esse quaerat possimus eaque sit sapiente sequi repu
            diandae, magnam nostrum magni molestias dolor dignissimos vero dolores.
          </p>
          <div className={styles.buttonBox}>
            <Button id={0} text="View More" link="/" size="medium"  />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;