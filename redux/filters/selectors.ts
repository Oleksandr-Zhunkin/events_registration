import { selectEvents } from "./../events/selectors";
import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectTitle = (state: RootState) => state.filters.filters.title;

export const selectOrganizer = (state: RootState) =>
  state.filters.filters.organizer;

export const selectDate = (state: RootState) => state.filters.filters.date;

export const selectFilteredEvents = createSelector(
  [selectEvents, selectTitle, selectOrganizer, selectDate],
  (events, title, organizer, date) => {
    return events?.filter((event) => {
      const titleFilter =
        !title || event.title.toLowerCase().includes(title.toLowerCase());

      const organizerFilter =
        !organizer ||
        event.organizer.toLowerCase().includes(organizer.toLowerCase());

      const dateFilter = !date || event.eventDate === date;

      return titleFilter && organizerFilter && dateFilter;
    });
  }
);
