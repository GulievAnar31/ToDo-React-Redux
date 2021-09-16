import React from 'react'
import {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addItem, deleteItem } from '../store/action';

function Todo() {
 const dispatch = useDispatch();

 const items = useSelector(({app}) => app.items);

let elems = items.map((item, index) => {
    return <li className="list-group-item" key = {index}>{item} <button onClick = {() => dispatch(deleteItem(index))}>X</button></li>
});

const [state, setstate] = useState();

const ref = useRef('')

const onButtonClick = () => {
    setstate(ref.current.value);
    dispatch(addItem(ref.current.value));
    ref.current.value = '';
}


    
    return (
        <div>
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
