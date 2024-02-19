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
        },

        setPriceHandler: (state, action) => {

            const { increment, index } = action.payload;

            let coppyArray = [...state.cart];

            coppyArray[index].cartTotalPrice += coppyArray[index].price * increment;

            // total price
            state.totalPrice = subTotal(coppyArray);

            if (coppyArray[index].count === 1 && increment === -1) {
                coppyArray.splice(index, 1);
                state.totalProduct--;
            }
            else {
                coppyArray[index].count += increment;

            }
            state.cart = coppyArray;
        },

        removeProductHandler: (state, action) => {
            let { index } = action.payload;
            let coppyArray = [...state.cart];

            coppyArray.splice(index, 1);
            state.totalProduct--;

            state.totalPrice = subTotal(coppyArray);


            state.cart = coppyArray;
        }
    }
})

function subTotal(arrayCart) {
    return arrayCart.reduce((acc, current) => {
        return acc + current.cartTotalPrice

    }, 0)


}

export const { saveCartHandler, setPriceHandler, removeProductHandler } = cartSlice.actions;
export default cartSlice.reducer;