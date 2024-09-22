import { Route, Routes } from "react-router-dom";
import "./App.scss";
import EventsBoard from "./pages/EventsBoard";
import EventRegistration from "./pages/EventRegistration";
import EventParticipants from "./pages/EventParticipants";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventsBoard />} />
        <Route path="/register/:eventId" element={<EventRegistration />} />
        <Route path="/participants/:eventId" element={<EventParticipants />} />
      </Routes>
    </>
  );
}

export default App;
