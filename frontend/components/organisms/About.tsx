import SectionTitle from '../molecules/SectionTitle';
import styles from './styles/About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SectionTitle id={2} idName="about" number="02" jaTitle="私について" enTitle="ABOUT" color="white" />
      </div>
    </div>
  );
};

export default About;
