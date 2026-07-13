import { TodoCounter } from '../ToDoCounter/index';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContent';
import { Modal } from '../Modal';
import { EmptySearch } from '../EmptySearch';
import './app.css'
import React from 'react';
import { TodoForm } from '../TodoForm';




function AppUI() {
    const { loading,
        error,
        completeTodo,
        deleteTodo,
        searchedTodos,
        openModal,
        setOpenModal,
        todos } = React.useContext(TodoContext)

    return (

        <main className='app'>

            <TodoCounter />
            <TodoSearch />

            <TodoList>

                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}

                {false && <TodosError />}

                {(!loading && todos.length === 0) && <EmptyTodos />}
                {(!loading && todos.length > 0 && searchedTodos.length === 0) && <EmptySearch />}


                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </main>
    )
}

export { AppUI }