import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import s from "./EventSortPanel.module.scss";
import {
  selectUniqueEventDates,
  selectUniqueOrganizers,
  selectUniqueTitles,
} from "../../../redux/events/selectors";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../../../redux/store";
import {
  searchByDate,
  searchByOrganizer,
  searchByTitle,
} from "../../../redux/filters/slice";

const EventSortPanel = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      organizer: "",
      eventDate: "",
    },
  });

  const dispatch: AppDispatch = useDispatch();

  const selectUniqTitles = useSelector(selectUniqueTitles);
  const selectUniqOrganizers = useSelector(selectUniqueOrganizers);
  const selectUniqDates = useSelector(selectUniqueEventDates);

  const onSubmit = handleSubmit((data) => {
    dispatch(searchByDate(data.eventDate));
    dispatch(searchByOrganizer(data.organizer));
    dispatch(searchByTitle(data.title));
  });

  const handleReset = () => {
    dispatch(searchByDate(null));
    dispatch(searchByOrganizer(""));
    dispatch(searchByTitle(""));
    reset();
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
      <div className={s.select_wrapper}>
        <label htmlFor="title">Title</label>
        <select
          className={s.select}
          {...register("title")}
          id="title"
          defaultValue=""
        >
          <option value="" disabled>
            Select a title
          </option>
          {selectUniqTitles?.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className={s.select_wrapper}>
        <label htmlFor="organizer">Organizer</label>
        <select
          className={s.select}
          {...register("organizer")}
          id="organizer"
          defaultValue=""
        >
          <option value="" disabled>
            Select an organizer
          </option>
          {selectUniqOrganizers?.map((organizer) => (
            <option key={organizer} value={organizer}>
              {organizer}
            </option>
          ))}
        </select>
      </div>

      <div className={s.select_wrapper}>
        <label htmlFor="eventDate">Event Date</label>
        <select
          className={s.select}
          {...register("eventDate")}
          id="eventDate"
          defaultValue=""
        >
          <option value="" disabled>
            Select a date
          </option>
          {selectUniqDates?.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>

      <button className={s.btn} type="submit">
        Sort
      </button>
      <button
        type="button"
        className={clsx(s.btn, s.reset)}
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default EventSortPanel;
