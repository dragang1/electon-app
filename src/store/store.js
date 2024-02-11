import { configureStore } from "@reduxjs/toolkit";

//slices
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        productStore: productSlice
    }
})

export default store;