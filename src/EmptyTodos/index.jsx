import React from 'react';
import './EmptyTodos.css'

function EmptyTodos() {

    return (
        <li className="empty-todos">
            <svg
                className="empty-todos-icon"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="14" y="8" width="36" height="50" rx="6" stroke="currentColor" strokeWidth="2.5" />
                <rect x="24" y="4" width="16" height="8" rx="3" fill="currentColor" />
                <path d="M22 26L28 32L42 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="22" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                <line x1="22" y1="48" x2="36" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
            </svg>

            <p className="empty-todos-title">¡Todo despejado!</p>
            <p className="empty-todos-subtitle">
                No tienes tareas pendientes por ahora. Presiona el botón <strong>+</strong> para crear tu primer ToDo.
            </p>
        </li>
    );
}

export { EmptyTodos };
