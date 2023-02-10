import { createReducer } from "@reduxjs/toolkit";
import * as Action_types from "../../redux/actiontypes";

const initialState = {
  no_females: "",
  no_males: "",
  searching_for: "",
  interested_shared_room: "",
  room_size: "",
  email: "",
  smoker: "",
  prefered_city: "",
  pets: "",
  language_spoken: "",
  nationality: "",
  sexual_orientation: "",
  occupation: "",
  age_range: "",
  amenities_swim: false,
  amenities_internet: false,
  amenities_private_toilets: false,
  amenities_play_ground: false,
  amenities_parking_space: false,
  amenities_entry_disabled: false,
  amenities_balcony: false,
  amenities_others: false,
  new_room_mate: {
    smoker: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
    occupation: "",
    pets: "",
    gender: "",
    mimimum_age: "",
    maximum_age: "",
    couples_welcomed: "",
  }
};

export const needRoomReducer = createReducer(initialState, {
  NeedRoom: (state, action) => {
    state.NeedRoom = action.payload;
  },
});