import { createReducer } from "@reduxjs/toolkit";
import * as Action_types from "../../redux/actiontypes";

const initialState = {
  currentUser: null
};

export const userReducers = createReducer(initialState, {
  currentUser: (state, action) => {
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