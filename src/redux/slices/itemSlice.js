import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {deleteChosenItem, fetchItem} from "../../services/items.api.requests";

const getItem = createAsyncThunk(
    'item/getItem',
    async function ({id}, {rejectWithValue,dispatch}) {
        try {
            const response = await fetchItem(id);
            if (!response.ok) {
                throw new Error('Server Error');
            }
            return response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const deleteItem = createAsyncThunk(
    'item/deleteItem',
    async function ({id}, {rejectWithValue}) {
        try {
            const response = await deleteChosenItem(id);
            if (!response.ok) {
                throw new Error('Can\'t delete: Server Error');
            }
            return response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        item: {},
        status: null,
        errors: null
    },
    reducers: {},
    extraReducers: {
        [getItem.pending]: (state) => {
            state.isPending = 'pending';
            state.errors = null;
        },
        [getItem.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.errors = null;
            state.item = action.payload;
        },
        [getItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.errors = action.payload;
        }
    }
});

const {reducer: itemReducer} = itemSlice;

export {itemReducer, getItem, deleteItem};