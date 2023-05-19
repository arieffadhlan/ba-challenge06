import { configureStore } from "@reduxjs/toolkit";
import carReducer from "@/store/reducers/carReducer";

export const store = configureStore({
  reducer: {
    cars: carReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});