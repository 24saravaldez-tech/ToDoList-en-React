import React, { useState } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContent';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    
    return (
        <input placeholder="Cortar cebolla"
        value={searchValue}
        
         onChange={(event) => {
            setSearchValue(event.target.value)
        }} />
    );
}

export { TodoSearch };