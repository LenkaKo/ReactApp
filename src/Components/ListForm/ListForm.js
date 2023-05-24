import { useState } from 'react';
import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import shortid from 'shortid';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ id: shortid(), title, description}));
        setTitle('');
        setDescription('');
        
    };

	return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
        <label>Title:</label> 
        <TextInput type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        <label>Description:</label>
        <TextInput type="text" id="icon" value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add list</Button>
        </form>
	);
};

export default ListForm;