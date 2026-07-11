import React from "react";

function useLocalStorage(itemNane, initialValue) {

    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem(itemNane)

        let parsedItems;

        if (!localStorageItem) {
            localStorage.setItem(itemNane, JSON.stringify(initialValue))
            parsedTodos = initialValue;
        } else {
            parsedItems = JSON.parse(localStorageItem)
            
        }
        setTimeout(() => {
            saveItem(parsedItems)  //para cambiar estado, esta es la sintaxis
            setLoading(false)  //para cambiar estado, esta es la sintaxis
        },5000)
    }, []);


    const saveItem = (item) => {
        localStorage.setItem(itemNane, JSON.stringify(item))
        setItem(item)
    };

    return { item, saveItem, loading, error};

}

export { useLocalStorage }


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Completar el curso', completed: false },
//   { text: 'balalalal', completed: false },
//   { text: 'llorar ', completed: false },
//   { text: 'shashsahahahsha ', completed: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')
