import EventsList from "../components/EventsList/EventsList";

import Pagination from "../components/Pagination/Pagination";

const EventsBoard = () => {
  return (
    <section>
      <h1>Events</h1>
      <EventsList />
      <Pagination />
    </section>
  );
};

export default EventsBoard;
