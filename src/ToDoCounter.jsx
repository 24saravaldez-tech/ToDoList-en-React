import { useState } from 'react';
import './TodoCounter.css'

function TodoCounter({ total, completed }) { //con las llaves se saca el texto o informacion interior
  let respuesta;

  if (total == completed) {
    respuesta =
      <h1>
        Felicidades! Has completado todos tus ToDo's hoy!!!
      </h1>
  } else {
    respuesta =
      <h1>
        Haz completado {completed} de {total} ToDo's
      </h1>
  }
  return (
    respuesta
  );
}

export { TodoCounter };