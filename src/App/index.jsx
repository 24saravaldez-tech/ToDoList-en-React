import React, { useState } from 'react'
import { TodoCounter } from '../ToDoCounter/index';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import { useLocalStorage } from './useLocalStorage';
import './app.css'


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Completar el curso', completed: false },
//   { text: 'balalalal', completed: false },
//   { text: 'llorar ', completed: false },
//   { text: 'shashsahahahsha ', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  )

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo => todo.text === text)
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo => todo.text === text)
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (

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

export { App }
