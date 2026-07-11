import './CreateTodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContent';

function CreateTodoButton(props) {
    const { setOpenModal } = React.useContext(TodoContext)
    return (
        <button className='create-todo-button'
            onClick={
                (event) => 
                    setOpenModal(true)}>
            +
        </button>
    );
}

export { CreateTodoButton };