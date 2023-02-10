import { createReducer } from "@reduxjs/toolkit";
import * as Action_types from "../../redux/actiontypes";

// initialize userToken from local storage
/*const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null*/

const initialState = {
  loading: false,
  currentUser: {},
  token: null,
  success: false,
  error: null,
};

export const userReducers = createReducer(initialState, {
  currentUser: (state = initialState, action) => {
      if (action.type === Action_types.LOGINSUCCESS) {
        state.currentUser = action.payload;
      } else {
        if (action.type === Action_types.LOGINOUTUSER) {
          state.currentUser = null ;
        }
        if (action.type === Action_types.SYNCUSERDATA) {
          state.currentUser = action.payload.user;
        } else {
          state.currentUser = action.payload;
        }
      }
  },
});