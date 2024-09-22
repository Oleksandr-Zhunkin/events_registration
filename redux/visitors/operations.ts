import { eventsApi } from "./../../config/eventsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const visitorsThunk = createAsyncThunk(
  "visitors",
  async (eventId: string | undefined, thunkApi) => {
    try {
      const { data } = await eventsApi.get(`/${eventId}`);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.message);
      } else {
        console.log("Unexpected error");
      }
    }
  }
);
