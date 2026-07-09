import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton'
import { TodoItem } from './TodoItem'
import './app.css'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Completar el curso', completed: false },
  { text: 'balalalal', completed: false },
  { text: 'llorar ', completed: false },
  { text: 'shashsahahahsha ', completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('los usuarios buscan todo de ' + searchValue)

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo => todo.text === text)
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo => todo.text === text)
    )
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    //react no puede retornar varios objetos. Para eso se debe envolver dentro de un solo div.

    <main className='app'>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} //encapsulamiento. La primera arrow function evita que completeTodo se ejecute diretamente, sino que pasa hasta que se le da click/
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </main>

  );
};

export default App
