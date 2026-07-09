import React from "react";

function useLocalStorage(itemNane, initialValue) {

    const localStorageItem = localStorage.getItem(itemNane)

    let parsedItems;

    if (!localStorageItem) {
        localStorage.setItem(itemNane, JSON.stringify([initialValue]))
        parsedTodos = [initialValue];
    } else {
        parsedItems = JSON.parse(localStorageItem)
    }

    const [item, setItem] = React.useState(parsedItems)

    const saveItem = (item) => {
        localStorage.setItem(itemNane, JSON.stringify(item))
        setItem(item)
    };

    return [item, saveItem]

}

export { useLocalStorage }