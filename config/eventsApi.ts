import axios from "axios";

export const eventsApi = axios.create({
  baseURL: "https://events-registration-service.onrender.com/api/events",
});
