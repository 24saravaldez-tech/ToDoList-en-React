import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className='todo-item'>
            {/* <span 
            className='checkmarkV'
            onClick={props.onComplete}>V</span> */}
            <CompleteIcon />
            {/* <{() => CompleteIcon(props)} /> */}
            <p className={props.completed ? 'completed' : ''} >{props.text}</p>

            <DeleteIcon />
            {/* <span 
            className='checkmarkX'
            onClick={props.onDelete}>X</span> */}
        </li>
    );
}

export { TodoItem }