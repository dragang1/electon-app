import { configureStore } from "@reduxjs/toolkit";

//slices
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        productStore: productSlice,
        cartStore: cartSlice,
    }
})

export default store;