import React from "react";
import ReactDOM from 'react-dom'
import { TodoContext } from "../TodoContent";
import './modal.css'

function Modal({ children }) {

    return ReactDOM.createPortal(
        <div className="Modal ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }