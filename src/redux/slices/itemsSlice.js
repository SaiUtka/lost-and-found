import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {fetchAllItems, postItem} from "../../services/items.api.requests";

const getAllItems = createAsyncThunk(
    'items/getAllItems',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetchAllItems();
            if (!response.ok) {
                throw new Error('Server Error');
            }
            return response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

const addNewItem = createAsyncThunk(
    'items/addNewItem',
    async function ({newItem}, {rejectWithValue, dispatch}) {
        try {

            const response = await postItem(newItem);
            if (!response.ok) {
                throw new Error('Can not add: Server Error');
            }
            return response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        filtered: [],
        status: null,
        errors: null
    },
    reducers: {
       getLost(state) {
           state.filtered = state.items.filter(item => item.status === 'lost')
       },
        getFound(state) {
            state.filtered = state.items.filter(item => item.status === 'found')
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllItems.pending]: (state) => {
            state.isPending = 'pending';
            state.errors = null;
        },
        [getAllItems.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.errors = null;
            state.items = action.payload;
        },
        [getAllItems.rejected]: (state, action) => {
            state.status = 'rejected';
            state.errors = action.payload;
        },
    }
});

const {reducer: itemsReducer, actions: {getLost, getFound, removeItem}} = itemsSlice;

export {itemsReducer, getAllItems, addNewItem, getLost, getFound, removeItem};

