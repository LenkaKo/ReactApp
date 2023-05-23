import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return(
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.favorite_subtitle}>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

export default Favorite;