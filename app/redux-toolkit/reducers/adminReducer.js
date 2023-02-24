import { createReducer } from "@reduxjs/toolkit";
import * as Action_types from "../../redux/actiontypes";

const initialState = {
  adminUser: null
};

export const adminReducer = createReducer(initialState, {
  currentUser: (state, action) => {
      if (action.type === Action_types.LOGINSUCCESS) {
        state.adminUser = action.payload;
      } else {
        if (action.type === Action_types.LOGINOUTUSER) {
          state.adminUser = null ;
        }
        if (action.type === Action_types.SYNCUSERDATA) {
          state.adminUser = action.payload.user;
        } else {
          state.adminUser = action.payload;
        }
      }
  },
});