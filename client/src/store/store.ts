import { configureStore } from "@reduxjs/toolkit";
import { advertisementApi } from "../services/AdvertisementService";

export const store = configureStore({
  reducer: {
    [advertisementApi.reducerPath]: advertisementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertisementApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
