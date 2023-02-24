import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from 'cookies-next';
import axios from "axios";

const initialState = {
  country: "Nigeria",
  country_code: "NG"
};

export const countrySlice = createSlice({
  name: 'countrySlice',
  initialState: initialState,
  reducers: {
    countryChange: async (state=initialState, action) => {
      let country_code = action.payload;
      await axios.get(`${process.env.API_URL}/getCountryById?country_code=${country_code}`)
      .then((res4) => {
        try {
          //alert(country_code);
         // console.log('Country Data 222:' + country_code);
          setCookie('selCountryCode', res4.data.userData.country_code);
          setCookie('selCountry', res4.data.userData.country_name);
          //setCookie('checkCookie',country_code);
          //return state;
          return [
            ...state,
            {
              country: res4.data.userData.country_name,
              country_name: res4.data.userData.country_name,
              flag_name: res4.data.userData.flag_name,
              country_code: res4.data.userData.country_code,
            }
          ];
        } catch (err) {
          console.error('Country Data  Error is: '+ err);
          return (state, action.payload);
        }
      });
    },
  },
});

export const { countryChange } =
  countrySlice.actions;

export default countrySlice.reducer;