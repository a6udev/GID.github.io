import { configureStore } from "@reduxjs/toolkit";
import profile from "./slices/profile/p_index";
import tourSlice from "./slices/tours/ToursSlice";

export const store = configureStore({
  reducer: {
    profile,
    tours: tourSlice,
  },
});
