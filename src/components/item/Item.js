import {useDispatch} from "react-redux";

import {getItem, setDetailsModal, setIsDeleting} from "../../redux/slices";
import '../../styles/items-styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

function Item({item}) {

    const dispatch = useDispatch();

    const getBorderColor = () => {
        if (item.status === 'lost') {
            return 'red-border'
        } else {
            return 'green-border'
        }
    }

    const handleClick = () => {
        dispatch(getItem(item));
        dispatch(setDetailsModal(true))
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(getItem(item))
        dispatch(setIsDeleting(true));
    }

    return (
    <div className={`item ${getBorderColor()}`}
         onClick={handleClick}>

        <div className={'item__trash-icon'}
        onClick={(e) => handleDelete(e)}>
            <FontAwesomeIcon icon={faTrash} />
        </div>
        <h3 className={'item__title'}> {item.title} </h3>
        <p className={'item__date'}>date: {item.date}</p>

    </div>

    );

}

export {Item}