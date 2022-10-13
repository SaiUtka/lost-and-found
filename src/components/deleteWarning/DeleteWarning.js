import {useDispatch, useSelector} from "react-redux";

import {deleteItem,removeItem, setIsDeleting} from "../../redux/slices";
import '../../styles/deleting-styles.css';

function DeleteWarning() {

    const dispatch = useDispatch();

    const isDeleting = useSelector(state => state.toolsReducer.isDeleting);
    const item = useSelector(state => state.itemReducer.item);

    const handleDelete = () => {
        dispatch(deleteItem(item));
        dispatch(removeItem(item));
        dispatch(setIsDeleting(false));
    };

    const stopScrolling = () => {
        document.body.style.overflow = "hidden";
    };
    const returnScroll = () => {
        document.body.style.overflow = "auto";
    };

    isDeleting ? stopScrolling() : returnScroll();

    return (

        <div className={isDeleting ? 'deleting__modal modal active' : 'deleting__modal modal'}>
            <div className={isDeleting ? 'deleting__wrapper active' : 'deleting__wrapper'}>
                <h2>Are you sure?</h2>
                <div className={'acceptation-buttons'}>
                    <button onClick={handleDelete}>Yes</button>

                    <button onClick={() => dispatch(setIsDeleting(false))}>No</button>

                </div>

            </div>

        </div>
    );

}

 export {DeleteWarning};