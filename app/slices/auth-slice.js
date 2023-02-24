import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initialState = getCookie('userToken') ? {
  isLoggedIn: true,
  currentUser: {}
} : {
  isLoggedIn: false,
  currentUser: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    deAuthenticate: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
    authenticate: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    restoreAuthState: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
  },
});

export const { deAuthenticate, authenticate, restoreAuthState } =
  authSlice.actions;

export default authSlice.reducer;