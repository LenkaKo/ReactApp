import styles from './Card.module.scss';
import { removeCard, toggleCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux'
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const toggleFavorite = () => {
        dispatch(toggleCard(id))
    };

    const remove = () => {
      dispatch(removeCard(id));
    }

    return (
      <li className={styles.card}>{title}
        <div>
          <button onClick={toggleFavorite} className={clsx(styles.star_btn, isFavorite && styles.activestar)}>
            <span className='fa fa-star-o'></span>
          </button>
          <button onClick={remove} className={styles.remove_btn}>
            <span className='fa fa-trash'></span>
          </button>
        </div>
      </li>
    );
};

export default Card;