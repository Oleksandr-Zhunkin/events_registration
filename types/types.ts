export interface Event {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  organizer: string;
}

export interface EventState {
  events: Event[];
  totalPages: number | null;
  isLoading: boolean;
  isError: null | object | unknown;
}

export interface PropEvent {
  event: Event;
}

export interface CreateVisitor {
  eventId: string | undefined;
  data: {
    fullName: string;
    email: string;
    dayOfBirth: string;
    source: "social media" | "friends" | "found myself";
  };
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  source: string;
  eventId: string;
}

export interface UserState {
  visitors: User[];
  isLoading: boolean;
  isError: null | object | unknown;
}

export interface PropUser {
  visitor: User;
}
