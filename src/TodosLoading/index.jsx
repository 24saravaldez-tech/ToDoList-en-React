import React, { useState } from 'react';
import './TodosLoading.css'

function TodosLoading() {

    return (

        <li className="todo-item loading-item">
            <span className="loading-circle"></span>

            <div className="loading-text"></div>

            <span className="loading-circle"></span>
        </li>
    );
}

export { TodosLoading };