import { createStore, combineReducers } from "redux";
import {
  UserReducers,
  PostRommsAddReducer,
  PostFlatReducer,
  CountryReducer,
  NeedRoomReducer

} from "./reducer";
import { inputsReducer } from "../redux-toolkit/reducers/inputsReducer";
import { addToWishListReducer } from "../redux-toolkit/reducers/addToWishListReducer";
import { addToCompareReducer } from "../redux-toolkit/reducers/addToCompareReducer";
import { currencyReducer } from "../redux-toolkit/reducers/currencyReducer";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for our  web app

const rootReducer = combineReducers({
  user: UserReducers,
  PostRommsAddReducer: PostRommsAddReducer,
  PostFlatReducer: PostFlatReducer,
  CountryReducer: CountryReducer,
  NeedRoomReducer:NeedRoomReducer,
  inputsReducer:inputsReducer,
  addToWishListReducer:addToWishListReducer,
  addToCompareReducer:addToCompareReducer,
  currencyReducer:currencyReducer,

});
const authPersistConfig = {
  key: "rootRooms",
  storage: storage,
  whitelist: [
    "user",
    "PostRommsAddReducer",
    "PostFlatReducer",
    "CountryReducer",
    "NeedRoomReducer",
    "inputsReducer",
    "addToWishListReducer",
    "addToCompareReducer",
    "currencyReducer",
  ],
};
const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
