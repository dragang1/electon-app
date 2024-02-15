import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
    },
    reducers: {
        saveCartHandler: (state, action) => {
            console.log(action.payload);
            let copyArray = [...state.cart];

            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) {
                copyArray.push({ ...action.payload, count: 1, cartTotalPrice: action.payload.price })
                state.totalProduct++;
                state.totalPrice += action.payload.price;
            } else {
                copyArray[findIndex].count++; // da uvecamo count
            }


            state.cart = copyArray;
        }
    }
})

export const { saveCartHandler } = cartSlice.actions;
export default cartSlice.reducer;