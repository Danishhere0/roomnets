import { deleteCookie } from 'cookies-next';
import { authenticate, deAuthenticate, restoreAuthState } from './auth-slice';
import { propertyStatus, propertyType, maxRooms, bed, bath, agencies, rent, area, sortBy } from './inputs-slice';
import { countryChange } from './country-slice';
import { currencyChange } from './currency-slice';
import { defineLikedProducts, like, unlike } from './addToWishList-slice';
import { defineCompareProducts, addCompareProducts, removeCompareProducts } from './addToCompare-slice';
import { authenticateAdm, deAuthenticateAdm, restoreAuthStateAdm } from './adminAuth-slice';


export const loginUser = (currentUser) => async (dispatch) => {
  dispatch(authenticate(currentUser));
};

export const logoutUser = (currentUser) => async (dispatch) => {
  deleteCookie('userToken');
  deleteCookie('currentUser');
  dispatch(deAuthenticate(currentUser));
};

export const checkLogin = (currentUser) => async (dispatch) => {
  dispatch(restoreAuthState(currentUser));
};

export const inputData = (status) => async (dispatch) => {
    dispatch(propertyStatus(status));
};

export const currencyChanger = (currency) => async (dispatch) => {
    dispatch(currencyChange(currency));
};

export const countryChanger = (country) => async (dispatch) => {
    dispatch(countryChange(country));
};

export const defLikedProduct = (likedProducts) => async (dispatch) => {
    dispatch(defineLikedProducts(likedProducts));
};

export const setunLikedProduct = (likedProducts) => async (dispatch) => {
    dispatch(unlike(likedProducts));
};

export const setLikedProducts = (likedProducts) => async (dispatch) => {
    dispatch(like(likedProducts));
};

export const defineRCompareProducts = (compareProducts) => async (dispatch) => {
    dispatch(defineCompareProducts(compareProducts));
};

export const addRCompareProducts = (compareProducts) => async (dispatch) => {
    dispatch(addCompareProducts(compareProducts));
};

export const removeRCompareProducts = (compareProducts) => async (dispatch) => {
    dispatch(removeCompareProducts(compareProducts));
};

export const loginAdmin = (admin) => async (dispatch) => {
    dispatch(authenticateAdm(admin));
  };
  
  export const logoutAdmin = (admin) => async (dispatch) => {
    deleteCookie('token');
    dispatch(deAuthenticateAdm(admin));
  };
  
  export const checkAdmin = (admin) => async (dispatch) => {
    dispatch(restoreAuthStateAdm(admin));
  };