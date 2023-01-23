import { createReducer } from "@reduxjs/toolkit";
import * as Action_types from "../../redux/actiontypes";

const initialState = {
  country: ""
};

export const countryReducer = createReducer(initialState, {
  country: (state, action) => {
    state.country = action.payload;
  },
});