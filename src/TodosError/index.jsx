import React from 'react';
import './TodosError.css'

function TodosError() {

    return (
        <li className="todos-error">
            <svg
                className="todos-error-icon"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
                <line x1="32" y1="20" x2="32" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="32" cy="44" r="2.4" fill="currentColor" />
            </svg>

            <p className="todos-error-title">¡Algo salió mal!</p>
            <p className="todos-error-subtitle">
                Ocurrió un error al cargar tus tareas. Intenta recargar la página.
            </p>
        </li>
    );
}

export { TodosError };