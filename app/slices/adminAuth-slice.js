import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initialState = getCookie('adminToken') ? {
  isLoggedIn: true,
  admin: {}
} : {
  isLoggedIn: false,
  admin: {}
};

export const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState: initialState,
  reducers: {
    deAuthenticate: (state) => {
      state.isLoggedIn = false;
    },
    authenticate: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload;
    },
    restoreAuthState: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload;
    },
  },
});

export const { deAuthenticate, authenticate, restoreAuthState } =
  adminAuthSlice.actions;

export default adminAuthSlice.reducer;