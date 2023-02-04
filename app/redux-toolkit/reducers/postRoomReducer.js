import { createReducer } from "@reduxjs/toolkit";
import * as Action_types from "../../redux/actiontypes";

const initialState = {
  add_type:"",
  paid_add: "",
  no_rooms: 0,
  no_toilets: 0,
  Building_type: "",
  rent: 0,
  rent_method: "",
  no_occupants: 0,
  email: "",
  i_am: "",
  building_location: "",
  street_name: "",
  rooms_avail_date: "",
  living_rooms: "",
  furnished_rooms: "",
  broker_agent_fee: "",
  rooms_size: "",
  minimum_stay: "",
  maximum_stay: "",
  amenities_swim: "",
  amenities_internet: "",
  amenities_private_toilets: "",
  amenities_play_ground: "",
  amenities_parking_space: "",
  amenities_entry_disabled: "",
  amenities_balcony: "",
  amenities_others: "",
  existing_room_mates: {
    smoker: "",
    no_males: 0,
    no_femalse: 0,
    pets: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
  },
  new_room_mate: {
    smoker: "",
    language_spoken: "",
    sexual_orientation: "",
    nationality: "",
    occupation: "",
    pets: "",
    mimimum_age: "",
    maximum_age: "",
    couples_welcomed: "",
  },
  mobile_number: "",
  firstname: "",
  lastname: "",
  advert_title: "",
  advert_description: "",
};

export const postRoomReducer = createReducer(initialState, {
  AddRoom: (state, action) => {
    state.AddRoom = action.payload;
  },
});