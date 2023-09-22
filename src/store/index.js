import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { usersReducer } from './slices/usersSlice';
import { homePageConfigApi } from './apis/homePageApi';
import { userLoginApi } from './apis/userLoginApi';

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [homePageConfigApi.reducerPath]: homePageConfigApi.reducer,
    [userLoginApi.reducerPath]: userLoginApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(homePageConfigApi.middleware)
      .concat(userLoginApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useUserLoginMutation
  } from './apis/userLoginApi';

  export {
    useHomePageConfigQuery
    } from './apis/homePageApi';