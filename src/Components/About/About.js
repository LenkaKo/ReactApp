import styles from './About.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return(
    <div className={styles.about}>
      <PageTitle>About</PageTitle>
      <p className={styles.about_subtitle}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

export default About;