import { RootState } from "../store";

export const selectEvents = (state: RootState) => state.events.events;

export const selectEventsIsLoading = (state: RootState) =>
  state.events.isLoading;

export const selectEventsIsError = (state: RootState) => state.events.isError;

export const selectTotalPages = (state: RootState) => state.events.totalPages;
