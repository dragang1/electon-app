import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [],
        currentCategory: "All Products"
    },
    reducers: {
        getProductHandler: (state, action) => {
            state.allProducts = action.payload;
        },

        getProductCategory: (state, action) => {
            state.currentCategory = action.payload;

        }
    }

})

export const { getProductHandler, getProductCategory } = productSlice.actions;
export default productSlice.reducer;