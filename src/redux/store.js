import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./landing/landingSlice";

export const store = configureStore({
  reducer: {
    landing: landingSlice,
  },
});
