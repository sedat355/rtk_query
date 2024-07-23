import { configureStore } from "@reduxjs/toolkit";
import usersApi from "./slices/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import albumsApi from "./slices/albumsApi";
import photosApi from "./slices/photosApi";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  }
});

console.log(store.getState())

setupListeners(store.dispatch)
export default store;