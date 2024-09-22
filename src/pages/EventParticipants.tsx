import { useSelector } from "react-redux";
import { selectEvents } from "../../redux/events/selectors";
import { useParams } from "react-router-dom";
import EventParticipantsList from "../components/EventParticipantsList/EventParticipantsList";

const EventParticipants = () => {
  const selectedEvents = useSelector(selectEvents);
  const { eventId } = useParams();
  const currentEvent = selectedEvents.find((event) => event._id === eventId);

  return (
    <section>
      <h1>{currentEvent?.title} participants</h1>
      <EventParticipantsList />
    </section>
  );
};

export default EventParticipants;
