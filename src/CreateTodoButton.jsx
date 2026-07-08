import './CreateTodoButton.css'
function CreateTodoButton(props) {
    return (
        <button className='create-todo-button' 
        onClick={
            (event) => {
            console.log('le diste click')
            console.log(event)
            console.log(event.target)
        }}>
            +
        </button>
    );
}

export { CreateTodoButton };