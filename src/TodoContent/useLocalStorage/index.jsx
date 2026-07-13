import React from "react";

function useLocalStorage(itamName, initialValue) {

    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const localStorageItem = localStorage.getItem(itamName)

        let parsedItems;

        try {
            if (!localStorageItem) {
                localStorage.setItem(itamName, JSON.stringify(initialValue))
                parsedItems = initialValue;
            } else {
                parsedItems = JSON.parse(localStorageItem)
            }
        } catch (error) {
            setError(true)
        }

        setTimeout(() => {
            saveItem(parsedItems)  
            setLoading(false)  
        }, 5000)

    }, []);


    const saveItem = (item) => {
        localStorage.setItem(itamName, JSON.stringify(item))
        setItem(item)
    };

    return { item, saveItem, loading, error };

}

export { useLocalStorage }
