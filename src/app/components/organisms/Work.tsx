import React, { FC } from "react";

// css import
import styles from "./styles/Work.module.css";
import Title from "../atoms/Title";


const Work: React.FC = () => {
  return (
    <div className={styles.work}>
      <div className={styles.container}>
      <Title id={3} idtext="work" text="Work" align="right" />
        <div className={styles.topFlexBox}>
          <div className={styles.leftBox}>
            <img className={styles.img} src="/img/work.jpg" alt="workTopImg" />
          </div>
          <div className={styles.rightBox}>
            <p className={styles.text}>
            I am currently working as an intern at one company and as a freelance engineer working 
            on the front-end.
            As a freelancer, I do everything by myself from sales, design, coding, 
            server management, and delivery.<br />
            <br />
            We also do video editing and can handle both YouTube 
            videos and vertical videos! For more information about our work, please visit the following sites
            </p>
          </div>
        </div>

        <div className={styles.bottomFlexBox}>
          <div className={styles.leftCard}>
            <div className={styles.imgBox}>
              <img src="/icon/web.png" alt="" />
            </div>
            <div className={styles.textBox}>
              <h2 className={styles.titleText}>
                Engineer
              </h2>
              <p className={styles.subText}>
                Click on the button below to view my detailed portfolio as an engineer, as well as a detailed description of my freelance work and pricing.
              </p>
              <div className={styles.buttonBox}>
                <a className={styles.button} href="">
                  Click Me!
                </a>
              </div>
            </div>
          </div>
          <div className={styles.leftCard}>
            <div className={styles.imgBox}>
              <img src="/icon/video.png" alt="" />
            </div>
            <div className={styles.textBox}>
              <h2 className={styles.titleText}>
                Video
              </h2>
              <p className={styles.subText}>
              Click on the button below to view my work as a video editor. I also do YouTube, although it's a little different than video editing. Please check it out!
              </p>
              <div className={styles.buttonBox}>
                <a className={styles.button} href="">
                  Click Me!
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work;