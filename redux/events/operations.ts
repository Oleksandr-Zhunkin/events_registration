import { AxiosError } from "axios";
import { eventsApi } from "./../../config/eventsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateVisitor } from "../../types/types";

export const eventsThunk = createAsyncThunk(
  "events",
  async (page: number, thunkApi) => {
    try {
      const options = {
        params: {
          page: page,
          limit: 12,
        },
      };
      const { data } = await eventsApi.get("/", options);

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

export const registerThunk = createAsyncThunk<Response, CreateVisitor>(
  "register",
  async (data, thunkApi) => {
    try {
      const result = await eventsApi.post(
        `/register/${data.eventId}`,
        data.data
      );

      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Axios error:", error.response?.data || error.message);
        return thunkApi.rejectWithValue(error.message);
      } else {
        console.log("Unexpected error");
      }
    }
  }
);
