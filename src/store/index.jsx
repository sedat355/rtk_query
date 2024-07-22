import { configureStore } from "@reduxjs/toolkit";
import usersApi from "./slices/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
  }
});

console.log(store.getState())

setupListeners(store.dispatch)
export default store;