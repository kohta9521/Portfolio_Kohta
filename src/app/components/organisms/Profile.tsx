import React, { FC } from "react";

// css import
import styles from "./styles/Profile.module.css";
import Title from "../atoms/Title";
import { link } from "fs";
import Button from "../atoms/Button";
import ViewMore from "../atoms/ViewMore";


const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Title id={0} idtext="profile" text="My Profile" align="left" />
      <div className={styles.flexBox}>
        <div className={styles.textBox}>
          <p className={styles.text}>
          Nice to meet you, and thank you for visiting kohta engineer portfolio site.<br />
          I am a second-year student at a university in Tokyo. I am a member of the law department of the Faculty of Law, and I am improving my technical skills through internships and books in order to become an engineer in the future.
          Currently I am working mainly as a front-end engineer while also doing freelance work.<br />
          I also run ENTER, an engineering club for university students only. Recently, I have been studying web 3.0 and other fields of interest.<br />
          I hope you enjoy your time here!
          </p>
          <ViewMore id={0} link="/pages/profile" />
        </div>
        <div className={styles.imgFlexBox}>
          <img className={styles.flexImg1} src="/img/profile2.jpg" alt="profileImg" />
          <img className={styles.flexImg2} src="/img/profile.jpg" alt="profileImg" />
        </div>
      </div>
    </div>
  )
}

export default Profile;