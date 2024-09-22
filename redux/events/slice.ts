import { eventsThunk, registerThunk } from "./operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { EventState, Event } from "../../types/types";

const initialState: EventState = {
  events: [
    {
      _id: "",
      title: "",
      description: "",
      eventDate: "",
      organizer: "",
    },
  ],
  totalPages: null,
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(eventsThunk.fulfilled, (state, action) => {
        const data = action.payload.events;
        data.map((event: Event) => {
          const date = new Date(event.eventDate);

          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();

          const formattedDate = `${day}-${month}-${year}`;
          event.eventDate = formattedDate;
        });
        state.totalPages = action.payload.totalPages;
        state.events = data;
        state.isLoading = false;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, eventsThunk.pending),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, eventsThunk.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const eventsReducer = slice.reducer;
