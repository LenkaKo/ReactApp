import { useState } from "react";
import styles from './CardForm.module.scss';
import Button from "../Button/Button";
import TextInput from '../TextInput/TextInput';
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/store";
import shortid from 'shortid';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard( { id: shortid(), columnId: props.columnId, title, isFavorite: false } ));
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;