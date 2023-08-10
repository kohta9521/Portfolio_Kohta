import React, { FC } from "react";

// css import
import styles from "./styles/Profile.module.css";
import Title from "../atoms/Title";


const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Title id={0} idtext="profile" text="My Profile" />
    </div>
  )
}

export default Profile;