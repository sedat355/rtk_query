import { configureStore } from "@reduxjs/toolkit";
import usersApi from "./slices/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import albumsApi from "./slices/albumsApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(albumsApi.middleware)
  }
});

console.log(store.getState())

setupListeners(store.dispatch)
export default store;