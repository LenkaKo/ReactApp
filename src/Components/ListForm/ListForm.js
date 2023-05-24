import { useState } from 'react';
import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = ({listId}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId }));
        setTitle('');
        setDescription('');
        
    };

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.span}>Title:</span>
             <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />

        <span className={styles.span}>Description:</span>
             <input className={styles.input} type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
            <Button>Add List</Button>
        </form>
	);
};

export default ListForm;