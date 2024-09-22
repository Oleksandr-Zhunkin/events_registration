import { useDispatch, useSelector } from "react-redux";
import { selectVisitors } from "../../../redux/visitors/selectors";
import { AppDispatch } from "../../../redux/store";
import EventParticipantItem from "../EventParticipantItem/EventParticipantItem";
import { visitorsThunk } from "../../../redux/visitors/operations";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./EventParticipantsList.module.scss";

const EventParticipantsList = () => {
  const selectedVisitors = useSelector(selectVisitors);
  const dispatch: AppDispatch = useDispatch();
  const { eventId } = useParams();

  useEffect(() => {
    dispatch(visitorsThunk(eventId));
  }, [dispatch, eventId]);

  return selectedVisitors.length === 0 ? (
    <p>There are no visitors on this event</p>
  ) : (
    <ul className={s.list}>
      {selectedVisitors?.map((visitor) => (
        <EventParticipantItem visitor={visitor} key={visitor._id} />
      ))}
    </ul>
  );
};

export default EventParticipantsList;
