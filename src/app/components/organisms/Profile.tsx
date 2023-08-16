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
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam sequi
          quisquam necessitatibus sint sed optio adipisci ipsam. Dicta beatae mollitia 
          erum officiis corrupti porro id ex at optio?
        </div>
        <img className={styles.flexImg} src="" alt="" />
        <img className={styles.flexImg} src="" alt="" />
      </div>
    </div>
  )
}

export default Profile;