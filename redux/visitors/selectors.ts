import { RootState } from "../store";

export const selectVisitors = (state: RootState) => state.visitors.visitors;

export const selectVisitorsIsLoading = (state: RootState) =>
  state.visitors.isLoading;

export const selectVisitorsIsError = (state: RootState) =>
  state.visitors.isError;
