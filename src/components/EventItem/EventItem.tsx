import { NavLink } from "react-router-dom";
import { PropEvent } from "../../../types/types";
import s from "./EventItem.module.scss";

const EventItem = ({ event }: PropEvent) => {
  return (
    <li className={s.item}>
      <div className={s.text_content}>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>{event.eventDate}</p>
        <p>{event.organizer}</p>
      </div>
      <div className={s.links_wrapper}>
        <NavLink className={s.link} to={`/register/${event._id}`}>
          Register
        </NavLink>
        <NavLink className={s.link} to={`/participants/${event._id}`}>
          View
        </NavLink>
      </div>
    </li>
  );
};

export default EventItem;
