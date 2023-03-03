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
    countryChange: async (state, action) => {
      let country_code = action.payload;
      await axios.get(`${process.env.API_URL}/getCountryById?country_code=${country_code}`)
      .then((res4) => {
          
          try {
            state.country = res4.data.userData.country_name;
            state.country_name = res4.data.userData.country_name;
            state.flag_name = res4.data.userData.flag_name;
            state.country_code = res4.data.userData.country_code;
            setCookie('selCountryCode',res4.data.userData.country_code);
            setCookie('selCountry', res4.data.userData.country_name);
           // alert(country_code);
            return {
              ...state,
              country_code: [...state.country_code, action.payload],
            };
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