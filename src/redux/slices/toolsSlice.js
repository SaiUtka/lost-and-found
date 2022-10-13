import {createSlice} from "@reduxjs/toolkit";

const toolSlice = createSlice({
    name: 'toolsSlice',
    initialState: {
        detailsModal: false,
        addModal: false,
        isFiltered: false,
        isDeleting: false
    },
    reducers: {
        setDetailsModal(state, action) {
            state.detailsModal = action.payload;
        },
        setAddModal(state, action) {
            state.addModal = action.payload;
        },
        setIsFiltered(state, action) {
            state.isFiltered = action.payload;
        },
        setIsDeleting(state, action) {
            state.isDeleting = action.payload;
        }
    }
});

const {reducer: toolsReducer, actions: {setDetailsModal, setAddModal, setIsFiltered, setIsDeleting}} = toolSlice;

export {toolsReducer, setDetailsModal, setAddModal, setIsFiltered, setIsDeleting};