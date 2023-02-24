import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initialState = {
  propertyStatus: "Property Status",
  rent: [100, 15000000],
  rooms_size: [50, 85000],
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
    rooms_size: (state, action) => {
      action.payload ? (state.rooms_size = [...action.payload]) : state.rooms_size.splice(0, state.rooms_size.length);
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { propertyStatus, propertyType, maxRooms, bed, bath, agencies, rent, area, sortBy } =
  inputSlice.actions;

export default inputSlice.reducer;