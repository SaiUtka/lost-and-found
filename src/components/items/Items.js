import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Item, AddItem, DeleteWarning, ItemDetails} from "../index";
import {getAllItems} from "../../redux/slices";


function Items() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllItems());
    }, [dispatch]);

    const {items, filtered, status, errors} = useSelector(state => state.itemsReducer);
    const isFiltered = useSelector(state => state.toolsReducer.isFiltered);

    return (
        <div className={'items__wrapper'}>
            {
                status === 'pending' && <div>Loading...</div>
            }
            {
                status === 'rejected' && <div>Error: {errors}</div>
            }

            {
                status === 'resolved' && isFiltered ?
                    filtered.map(item => <Item key={item.id} item={item}/>) :
                    items.map(item => <Item key={item.id} item={item}/>)
            }
            {
                <ItemDetails/>
            }
            {
                <AddItem/>
            }
            {
                <DeleteWarning/>
            }

        </div>
    );

}

export {Items}