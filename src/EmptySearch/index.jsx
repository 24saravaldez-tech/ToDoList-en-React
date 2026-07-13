
import React from 'react';
import './EmptySearch.css'

function EmptySearch() {

    return (
        <li className="empty-search">
            <svg
                className="empty-search-icon"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="27" cy="27" r="16" stroke="currentColor" strokeWidth="2.5" />
                <line x1="38" y1="38" x2="52" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <p className="empty-search-title">Sin coincidencias</p>
            <p className="empty-search-subtitle">
                No encontramos tareas que coincidan con tu búsqueda.
            </p>
        </li>
    );
}

export { EmptySearch };