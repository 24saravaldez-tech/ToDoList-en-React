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
        setOpenModal } = React.useContext(TodoContext)

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

                {error && <TodosError />}
                {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

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

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </main>
    )
}

export { AppUI }