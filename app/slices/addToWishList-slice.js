import { createSlice } from '@reduxjs/toolkit';

const initialState = { likedProducts: [] };

export const addToWishListSlice = createSlice({
  name: 'addToWishList',
  initialState: initialState,
  reducers: {
    defineLikeProduct: (state, action) => {
      state.likedProducts = action.payload;
    },
  
    likeProduct: (state, action) => {
      state.likedProducts?.includes(action.payload) || state.likedProducts?.push(action.payload);
    },
  
    unlikeProduct: (state, action) => {
      const index = state.likedProducts?.indexOf(action.payload);
      if (index > -1) {
        state.likedProducts?.splice(index, 1);
      }
    },
  },
});

export const { defineLikedProduct, likeProduct, unlikeProduct } =
  addToWishListSlice.actions;

export default addToWishListSlice.reducer;