import { createSlice } from "@reduxjs/toolkit";

export const landingSlice = createSlice({
  name: "landing",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenres } = landingSlice.actions;
export default landingSlice.reducer;
