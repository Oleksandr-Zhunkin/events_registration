import { visitorsReducer } from "./visitors/slice";
import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/slice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    visitors: visitorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
