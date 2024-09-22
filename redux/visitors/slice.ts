import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./../../types/types";
import { visitorsThunk } from "./operations";

const initialState: UserState = {
  visitors: [
    {
      _id: "",
      fullName: "",
      email: "",
      dateOfBirth: "",
      source: "",
      eventId: "",
    },
  ],
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "visitors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(visitorsThunk.fulfilled, (state, action) => {
        state.visitors = action.payload;
        state.isLoading = false;
      })
      .addCase(visitorsThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(visitorsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const visitorsReducer = slice.reducer;
