import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [],
    },
    reducers: {
        getProductHandler: (state, action) => {
            state.allProducts = action.payload;
        }
    }

})

export const { getProductHandler } = productSlice.actions;
export default productSlice.reducer;