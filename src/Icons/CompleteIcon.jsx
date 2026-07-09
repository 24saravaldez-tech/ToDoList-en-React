import React from "react";
import { TodoIcon } from './TodoIcon'

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type='Marck'
            color={completed ? 'green' : 'grey'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }