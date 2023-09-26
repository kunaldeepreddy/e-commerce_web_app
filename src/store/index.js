import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/userSlice";
import { homePageConfigApi } from "./apis/homePageApi";
import { userLoginApi } from "./apis/userLoginApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [homePageConfigApi.reducerPath],
};

const rootReducer = combineReducers({
  user: userReducer,
  [homePageConfigApi.reducerPath]: homePageConfigApi.reducer,
  [userLoginApi.reducerPath]: userLoginApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(homePageConfigApi.middleware)
      .concat(userLoginApi.middleware);
  },
});

export let persistor = persistStore(store);

setupListeners(store.dispatch);

export { useUserLoginMutation, useUserSignUpMutation} from "./apis/userLoginApi";

export { useHomePageConfigQuery } from "./apis/homePageApi";

export * from "./slices/userSlice";
