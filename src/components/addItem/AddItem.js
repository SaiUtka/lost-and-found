import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {addNewItem, getAllItems, setAddModal} from "../../redux/slices";
import '../../styles/addItem-styles.css';

function AddItem() {

    const dispatch = useDispatch();

    const addModal = useSelector(state => state.toolsReducer.addModal);
    const [status, setStatus] = useState('');
    const [itemTitle, setItemTitle] = useState('');
    const [itemDesc, setItemDesc] = useState('');

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const newItem = {
        "title": itemTitle,
        "description": itemDesc,
        "status": status,
        "date": date
    }

    const handleAdd = () => {
        if (!status || !itemTitle || !itemDesc) {
            alert('You have to complete all the fields');
        } else {
            dispatch(setAddModal(false));
            dispatch(addNewItem({newItem}));
            dispatch(getAllItems());
            setItemTitle('');
            setItemDesc('');
        }
    }

    const stopScrolling = () => {
        document.body.style.overflow = "hidden";
    };
    const returnScroll = () => {
        document.body.style.overflow = "auto";
    };

    addModal ? stopScrolling() : returnScroll();

    return (
        <div className={addModal ? 'add-item__modal modal active' : 'add-item__modal modal'}
        onClick={() => dispatch(setAddModal(false))}>

            <div className={addModal ? 'add-item__wrapper active' : 'add-item__wrapper'}
            onClick={(e) => e.stopPropagation()}>

                <h2 className={'add-item__title'}>Complete all the fields</h2>

                <div className={'add-item__options'}>
                    <div className={'add__title add__option'}>
                        <h3>Write a name of the item</h3>
                        <input type="text"
                               value={itemTitle}
                        placeholder={'name'}
                        onChange={(e) => setItemTitle(e.target.value)}/>
                    </div>
                    <div className={'add__status add__option'}>
                        <h3>Choose Status</h3>
                        <div className={'radio'}>
                            <div className={'lost'}> 
                                <label htmlFor={'lost'}> lost</label>
                                <input type="radio"
                                       id={'lost'}
                                       name={'status'}
                                       onClick={() => setStatus('lost')}/>
                            </div>

                            <div className={'found'}>
                                <label htmlFor={'found'}>found</label>
                                <input type="radio"
                                       id={'found'}
                                       name={'status'}
                                       onClick={() => setStatus('found')}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className={'add__description add__option'}>
                        <h3>Write a description of the item</h3>
                        <textarea
                            placeholder={'description'}
                            value={itemDesc}
                            onChange={(e) => setItemDesc(e.target.value)}
                        />
                    </div>
                </div>

                <div className={'add-item__buttons'}>
                    <button className={'add'} onClick={handleAdd}>Add</button>
                    <button className={'cancel'}
                            onClick={() => dispatch(setAddModal(false))}>
                        Cancel
                    </button>
                </div>
                
            </div>

        </div>
    );

}

export {AddItem};