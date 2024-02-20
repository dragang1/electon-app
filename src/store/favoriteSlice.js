import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favoriteItems: [],
        favoriteCount: 0,
    },

    reducers: {
        saveFavoriteHandler: (state, action) => {
            let coppyArray = [...state.favoriteItems];

            let findIndex = null;

            coppyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) {
                coppyArray.push(action.payload);
                state.favoriteCount++;
            } else {
                coppyArray.splice(findIndex, 1);
                state.favoriteCount--;
            }







            state.favoriteItems = coppyArray;
        }
    }

})

export const { saveFavoriteHandler } = favoriteSlice.actions;
export default favoriteSlice.reducer;