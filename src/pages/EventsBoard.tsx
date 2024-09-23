import { useEffect, useMemo, useState } from "react";
import EventsList from "../components/EventsList/EventsList";
import EventSortPanel from "../components/EventSortPanel/EventSortPanel";

import Pagination from "../components/Pagination/Pagination";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { eventsThunk } from "../../redux/events/operations";
import {
  selectDate,
  selectOrganizer,
  selectTitle,
} from "../../redux/filters/selectors";

const EventsBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch: AppDispatch = useDispatch();
  const selectedTitle = useSelector(selectTitle);
  const selectedOrganizer = useSelector(selectOrganizer);
  const selectedDate = useSelector(selectDate);

  const urlParams = useMemo(
    () => ({
      currentPage,
      selectedTitle,
      selectedOrganizer,
      selectedDate,
    }),
    [currentPage, selectedTitle, selectedOrganizer, selectedDate]
  );

  useEffect(() => {
    dispatch(eventsThunk(urlParams));
  }, [dispatch, urlParams]);

  return (
    <section>
      <h1>Events</h1>
      <EventSortPanel />
      <EventsList />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default EventsBoard;
