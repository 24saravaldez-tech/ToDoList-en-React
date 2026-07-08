import MarckSVG from './check.svg?react';
import DeleteSVG  from './delete.svg?react';

const iconTypes = {
    'Marck' : <MarckSVG />,
    'Delete' : <DeleteSVG />
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`Icons check${type} ${color}`} onClick={onClick}>
            {/* {type == "Marck" ? <MarckSVG /> : <DeleteSVG />} */}
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon }