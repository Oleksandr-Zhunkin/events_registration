import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    title: "",
    organizer: "",
    date: null,
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchByTitle(state, action) {
      state.filters.title = action.payload;
    },
    searchByOrganizer(state, action) {
      state.filters.organizer = action.payload;
    },
    searchByDate(state, action) {
      state.filters.date = action.payload;
    },
  },
});
export const { searchByTitle, searchByOrganizer, searchByDate } = slice.actions;
export const filtersSlice = slice.reducer;
