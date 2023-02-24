import { createSlice } from '@reduxjs/toolkit';

const initialState = { compareProducts: [] };

export const addToCompareSlice = createSlice({
  name: 'currency',
  initialState: initialState,
  reducers: {
    defineCompareProducts: (state, action) => {
      state.compareProducts = action.payload;
    },
    addCompareProducts: (state, action) => {
      state.compareProducts?.includes(action.payload) || state.compareProducts?.push(action.payload);
    },
    removeCompareProducts: (state, action) => {
      const index = state.compareProducts?.indexOf(action.payload);
      if (index > -1) {
        state.compareProducts?.splice(index, 1);
      }
    },
  },
});

export const { defineCompareProducts, addCompareProducts, removeCompareProducts } =
addToCompareSlice.actions;

export default addToCompareSlice.reducer;