import React from 'react'
import {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addItem, deleteItem } from '../store/action';

function Todo() {
 const dispatch = useDispatch();
 const [deletedItem, setDeletedItem] = useState();

 const onDeleteClick = (index) => {
    setDeletedItem(index);
    dispatch(deleteItem(index))
}


 const items = useSelector(({app}) => app.items);

let elems = items && items.map((item, index) => {
    return <li className="list-group-item"  key = {index} onClick = {() => onDeleteClick(index)}>{item}</li>
});

const [state, setstate] = useState();

const ref = useRef('')


const onButtonClick = () => {
    setstate(ref.current.value);
    dispatch(addItem(ref.current.value));
    ref.current.value = '';
}


    
    return (
        <div className = 'mainBlock'>
        <div className = 'todo'>
            <ul className="list-group">
                {elems}
            </ul>
        </div>
         <div className = 'group'>
         <input ref = {ref} type="text" />
         <input  id = 'submit' class="btn btn-warning" type="submit" onClick = {onButtonClick} />
         </div>
         </div>
    )
}

export default Todo
