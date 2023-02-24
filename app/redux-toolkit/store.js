import { configureStore } from "@reduxjs/toolkit";
/*import { inputsReducer } from "./reducers/inputsReducer";
import { addToWishListReducer } from "./reducers/addToWishListReducer";
import { addToCompareReducer } from "./reducers/addToCompareReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { countryReducer } from "./reducers/countryReducer";
import { userReducers } from "./reducers/userReducers";
import { adminReducer } from "./reducers/adminReducer";
import { adminReducer } from "./reducers/adminReducer";

import authReducer from "./slices/auth";
import messageReducer from "./slices/message";

export const store = configureStore({
  reducer: {
    inputsReducer,
    addToWishListReducer,
    addToCompareReducer,
    currencyReducer,
    countryReducer,
    userReducers,
    adminReducer,
  },
});*/

import authReducer from "../slices/auth-slice";
import inputsReducer from "../slices/inputs-slice";
import currencyReducer from "../slices/currency-slice";
import countryReducer from "../slices/country-slice";
import postRoomReducer from "../slices/postRoom-slice";
import addToWishListReducer  from "../slices/addToWishList-slice";
import addToCompareReducer  from "../slices/addToCompare-slice";
import adminAuthReducer from "../slices/adminAuth-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    inputsReducer: inputsReducer,
    currencyReducer: currencyReducer,
    countryReducer: countryReducer,
    postRoomReducer: postRoomReducer,
    addToWishListReducer: addToWishListReducer,
    addToCompareReducer: addToCompareReducer,
    adminAuthReducer: adminAuthReducer,
  }
});

