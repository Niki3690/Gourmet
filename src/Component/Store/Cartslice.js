import { createSlice } from "@reduxjs/toolkit";

let cartslice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            let rmv = state.filter((item) => item.id !== action.payload);
            return rmv;
        },
        increment(state, action) {
            let items = state.find((item) => item.id === action.payload);
            if (items) {
                items.quantity += 1;
            }
        },
        decrement(state, action) {
            let items = state.find((item) => item.id === action.payload);
            if (items && items.quantity > 1) {
                items.quantity -= 1;
            }
        },
    },
});

export let { add, remove, increment, decrement } = cartslice.actions;
export default cartslice.reducer;
