import '../../styles/itemDetails-styles.css';
import {useDispatch, useSelector} from "react-redux";
import {setDetailsModal} from "../../redux/slices";

function ItemDetails() {

    const dispatch = useDispatch();

    const {item, status, errors} = useSelector(state => state.itemReducer);
    const detailsModal = useSelector(state => state.toolsReducer.detailsModal);

    return (
        <div className={detailsModal ? 'item-details__modal modal active' : 'item-details__modal modal'}
        onClick={() => dispatch(setDetailsModal(false))}>


            {
                status === 'pending' &&
                <div className={detailsModal ? 'item-details__wrapper active' : 'item-details__wrapper'}>
                    <h2 className={'error'}>Loading...</h2>
                </div>
            }

            {
                status === 'rejected' &&
                <div className={detailsModal ? 'item-details__wrapper active' : 'item-details__wrapper'}>
                    <h2 className={'error'}>Error: {errors}</h2>
                </div>
            }

            {
                status === 'resolved' &&
                <div className={detailsModal ? 'item-details__wrapper active' : 'item-details__wrapper'}
                onClick={(e) => e.stopPropagation()}
                >
                    <div className={'item-details__header'}>
                        <h2 className={'title'}>{item.title}</h2>
                        <button className={'btn'}
                        onClick={() => dispatch(setDetailsModal(false))}>
                            &#10006;
                        </button>
                    </div>
                    <div className={'item-details__content'}>
                        <p className={'description'}>{item.description}</p>
                        <p className={'status'}>status: {item.status}</p>
                        <p className={'date'}>date: {item.date}</p>
                    </div>
                </div>
            }


        </div>
    );

}

export {ItemDetails};