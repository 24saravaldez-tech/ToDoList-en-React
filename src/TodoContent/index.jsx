import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const searchedTodos = todos.filter(
        (todo) => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }
    )

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const addTodo = (text) => {
        if(text.trim() == ''){
            return;
        }
        const newTodos = [...todos];
        newTodos.push({
            id: crypto.randomUUID(),
            text,
            completed: false
        })
        saveTodos(newTodos)
    };

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.id === id)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.id === id)
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        < TodoContext.Provider value={{
            loading,
            error,
            completeTodo,
            deleteTodo,
            totalTodos,
            searchedTodos,
            searchValue,
            setSearchValue,
            completedTodos,
            openModal,
            setOpenModal,
            addTodo,
            todos
        }} >
            {children}
        </TodoContext.Provider >
    )
}



export { TodoContext, TodoProvider }