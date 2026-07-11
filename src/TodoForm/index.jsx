import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContent';

function TodoForm() {

    const { addTodo, setOpenModal } = React.useContext(TodoContext) //constante para usar el contexto

    const [newTodoValue, setNewTodoValue] = React.useState('') //creo un estado. newTodo para guardarlo y su set para renderizarlo.

    const onCancel = (event) => { setOpenModal(false) } //aseguramos que el modal se quede en false a menos que se cambie su estado desde onClick on el button

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>

            <label>
                Escribe tu nueva tarea
            </label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Comprar leche..." />

            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>

                <button type="submit">
                    Agregar
                </button>
            </div>

        </form>
    );
}

export { TodoForm };