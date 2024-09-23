import { useForm } from "react-hook-form";
import s from "./FormRegistration.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { registerThunk } from "../../../redux/events/operations";
import { AppDispatch } from "../../../redux/store";
import { CreateVisitor } from "../../../types/types";

interface FormData {
  fullName: string;
  email: string;
  dayOfBirth: string;
  source: "social media" | "friends" | "found myself";
}

const FormRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const { eventId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    const sendData: CreateVisitor = {
      eventId,
      data: {
        fullName: data.fullName,
        email: data.email,
        dayOfBirth: data.dayOfBirth,
        source: data.source,
      },
    };

    dispatch(registerThunk(sendData));
    reset();
  });

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <form className={s.form} onSubmit={onSubmit}>
      <div className={s.input_wrapper}>
        <label className={s.label}>Full name</label>
        <input
          className={s.input}
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <span className={s.error}>This field is required</span>
        )}
      </div>

      <div className={s.input_wrapper}>
        <label className={s.label}>Email</label>
        <input className={s.input} {...register("email", { required: true })} />
        {errors.email && (
          <span className={s.error}>This field is required</span>
        )}
      </div>

      <div className={s.input_wrapper}>
        <label className={s.label}>Date of birth</label>
        <input
          className={s.input}
          {...register("dayOfBirth", { required: true })}
        />
        {errors.dayOfBirth && (
          <span className={s.error}>This field is required</span>
        )}
      </div>

      <div className={s.input_wrapper}>
        <label className={s.label}>Where did you hear about the event?</label>
        <div className={s.radio_wrapper}>
          <label>
            <input
              type="radio"
              value="social media"
              {...register("source", { required: true })}
            />
            Social Media
          </label>
          <label>
            <input
              type="radio"
              value="friends"
              {...register("source", { required: true })}
            />
            Friends
          </label>
          <label>
            <input
              type="radio"
              value="found myself"
              {...register("source", { required: true })}
            />
            Found Myself
          </label>
        </div>
        {errors.source && (
          <span className={s.error}>Please select an option</span>
        )}
      </div>
      <div className={s.btn_wrapper}>
        <button className={s.btn} type="submit">
          Submit
        </button>
        <button className={clsx(s.btn, s.cancel)} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FormRegistration;
