import MarckSVG from './check.svg?react';
import DeleteSVG  from './delete.svg?react';

const iconTypes = {
    'Marck' : (color) =>  <MarckSVG  className="Icons" fill={color}/>,
    'Delete' : (color) => <DeleteSVG className="Icons" fill={color}/>
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`check${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }