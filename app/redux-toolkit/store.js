import { configureStore } from "@reduxjs/toolkit";
import { inputsReducer } from "./reducers/inputsReducer";
import { addToWishListReducer } from "./reducers/addToWishListReducer";
import { addToCompareReducer } from "./reducers/addToCompareReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { countryReducer } from "./reducers/countryReducer";
import { userReducers } from "./reducers/userReducers";
import { adminReducer } from "./reducers/adminReducer";

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
});
