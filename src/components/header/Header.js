import {useDispatch} from "react-redux";
import {useState} from "react";

import {getFound, getLost, setAddModal, setIsFiltered} from "../../redux/slices";
import '../../styles/header-styles.css';

function Header() {

    const dispatch = useDispatch();

    const [clicked, setClicked] = useState(1);

    return (
        <header className={'header'}>
            <div className={'header__wrapper'}>
                <div className={'header__logo'}>Lost & Found</div>

                <div className={'filter-buttons'}>
                    <button
                        className={clicked === 1 ? 'filter-btn clicked' : 'filter-btn btn'}
                        onClick={() => {
                            dispatch(setIsFiltered(false))
                            setClicked(1);
                        }}>
                        All
                    </button>

                    <button
                        className={clicked === 2 ? 'filter-btn clicked' : 'filter-btn btn'}
                        onClick={() => {
                        dispatch(setIsFiltered(true));
                        dispatch(getLost());
                        setClicked(2);
                    }}>
                        Only lost
                    </button>

                    <button
                        className={clicked === 3 ? 'filter-btn clicked' : 'filter-btn btn'}
                        onClick={() => {
                        dispatch(setIsFiltered(true))
                        dispatch(getFound());
                            setClicked(3);
                    }}>
                        Only found
                    </button>

                </div>

                <div className={'header__actions'}>
                    <button className={'btn'}
                    onClick={() => dispatch(setAddModal(true))}>
                        Add+
                    </button>
                    <div className={'header__search'}> </div>
                </div>
            </div>
        </header>
    );

}

export {Header};