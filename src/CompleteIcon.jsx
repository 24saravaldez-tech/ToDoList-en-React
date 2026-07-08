import React from "react";
import { TodoIcon } from './TodoIcon'

function CompleteIcon() {
    return (
        <TodoIcon
            type='Marck'
            color='checkMarck'
            // onClick={props.onComplete}
        />
    )
}

export { CompleteIcon }