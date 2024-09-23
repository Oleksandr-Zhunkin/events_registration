import { filtersSlice } from "./filters/slice";
import { visitorsReducer } from "./visitors/slice";
import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/slice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    visitors: visitorsReducer,
    filters: filtersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
