import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from "../Card/Card";
import { getFavoriteList } from "../../redux/store";
import { useSelector } from "react-redux";
import shortid from "shortid";


const Favorite = (props) => { 

  const allCards = useSelector(getFavoriteList);
  console.log(allCards)

  if(allCards.length === 0) {
    return (
      <>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.title}>List is empty...</p>
      </>
    )
  }

  return(
    <div className={styles.favorite}>
       <article className={styles.column}>
        <ul className={styles.cards}>
          {allCards.map(card => <Card key={shortid()} title={card.title} isFavorite={allCards.isFavorite}/>)}
        </ul>
      </article>
    </div>
  )
};

export default Favorite;