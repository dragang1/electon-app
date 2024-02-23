import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [],
        currentCategory: "All Products",
        currentSearch: "",
    },
    reducers: {
        getProductHandler: (state, action) => {
            state.allProducts = action.payload;
        },

        getProductCategory: (state, action) => {
            state.currentCategory = action.payload;

        },

        getSearchProductHandler: (state, action) => {

            state.currentSearch = action.payload;
        },
    }

})

export const { getProductHandler, getProductCategory, getSearchProductHandler } = productSlice.actions;
export default productSlice.reducer;