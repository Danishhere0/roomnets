import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initialState = {
  propertyStatus: "Property Status",
  rent: [200, 8500],
 // area: [50, 8500],
};

export const inputSlice = createSlice({
  name: 'inputSlice',
  initialState: initialState,
  reducers: {
    propertyStatus: (state, action) => {
      state.propertyStatus = action.payload;
    },
    propertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    maxRooms: (state, action) => {
      state.maxRooms = action.payload;
    },
    bed: (state, action) => {
      state.bed = action.payload;
    },
    bath: (state, action) => {
      state.bath = action.payload;
    },
    agencies: (state, action) => {
      state.agencies = action.payload;
    },
    rent: (state, action) => {
      action.payload ? (state.rent = [...action.payload]) : state.rent.splice(0, state.rent.length);
    },
    area: (state, action) => {
      action.payload ? (state.area = [...action.payload]) : state.area.splice(0, state.area.length);
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { propertyStatus, propertyType, maxRooms, bed, bath, agencies, rent, area, sortBy } =
  inputSlice.actions;

export default inputSlice.reducer;