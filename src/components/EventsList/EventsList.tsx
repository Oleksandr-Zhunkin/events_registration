import { useSelector } from "react-redux";
import EventItem from "../EventItem/EventItem";
import { selectEvents } from "../../../redux/events/selectors";
import s from "./EventsList.module.scss";

const EventsList = () => {
  const selectedEvents = useSelector(selectEvents);
  return selectedEvents.length === 0 ? (
    <p>There are no events</p>
  ) : (
    <ul className={s.list}>
      {selectedEvents?.map((event) => (
        <EventItem event={event} key={event._id} />
      ))}
    </ul>
  );
};

export default EventsList;
