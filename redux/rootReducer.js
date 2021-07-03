import { combineReducers } from "redux";

import * as User from "./reducer/user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  fcmToken: User.fcmToken,
  User: User.userReducer,
  loading: User.loading,
  switch1: User.switch1,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fcmToken", "User", "switch1"],
};

export default persistReducer(persistConfig, rootReducer);

export function* rootSaga() {}
