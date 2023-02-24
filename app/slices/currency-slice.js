import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: "NGN",
  name: "Naira",
  symbol: "₦",
  currencyValue: 1,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState: initialState,
  reducers: {
    currencyChange: (state, action) => {
      state.currency = action.payload.currency;
      state.name = action.payload.name;
      state.symbol = action.payload.symbol;
      state.currencyValue = action.payload.value;
    },
  },
});

export const { currencyChange } =
  currencySlice.actions;

export default currencySlice.reducer;