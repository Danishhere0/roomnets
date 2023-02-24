import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: ""
};

export const countrySlice = createSlice({
  name: 'countrySlice',
  initialState: initialState,
  reducers: {
    countryChange: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { country } =
  countrySlice.actions;

export default countrySlice.reducer;