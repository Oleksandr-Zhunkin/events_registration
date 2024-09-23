import { RootState } from "../store";

export const selectEvents = (state: RootState) => state.events.events;

export const selectEventsIsLoading = (state: RootState) =>
  state.events.isLoading;

export const selectEventsIsError = (state: RootState) => state.events.isError;

export const selectTotalPages = (state: RootState) => state.events.totalPages;

export const selectUniqueTitles = (state: RootState) =>
  state.events.uniqueTitles;

export const selectUniqueOrganizers = (state: RootState) =>
  state.events.uniqueOrganizers;

export const selectUniqueEventDates = (state: RootState) =>
  state.events.uniqueEventDates;
