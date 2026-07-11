import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContent';

function TodoCounter() {

  const {
    totalTodos,
    completedTodos
  } = React.useContext(TodoContext);

  return (
    <h1>
      {((totalTodos !== completedTodos) && totalTodos > 0)
        ? `Has completado ${completedTodos} de ${totalTodos} ToDos`
        : totalTodos === 0
        ? 'No tienes ninguna tarea aun. Crea tu primer ToDo'
        : '¡Felicidades! Has completado todos tus ToDos hoy!!!'}
    </h1>
  );
}

export { TodoCounter };