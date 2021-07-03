import { types } from "../actionMethodes/types";

export const userReducer = (state = null, action) => {
  if (action.type === types.signIn) {
    return action.payload;
  } else if (action.type === types.updateProfile) {
    return {
      ...state,
      name: action.payload.name,
      phone: action.payload.phone,
    };
  } else if (action.type === types.logOut) return null;

  return state;
};

export const fcmToken = (state = null, action) => {
  if (action.type === types.saveToken) {
    return action.payload;
  } else if (action.type === types.logOut) return null;
  return state;
};

export const loading = (state = false, action) => {
  if (action.type == "loading") {
    return !state;
  }
  return state;
};
export const switch1 = (state = false, action) => {
  if (action.type == "switch1") {
    return !state;
  }
  return state;
};
