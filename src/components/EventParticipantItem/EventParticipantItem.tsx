import { PropUser } from "../../../types/types";
import s from "./EventParticipantItem.module.scss";

const EventParticipantItem = ({ visitor }: PropUser) => {
  return (
    <li className={s.item}>
      <p className={s.text_content}>{visitor.fullName}</p>
      <p className={s.text_content}>{visitor.email}</p>
    </li>
  );
};

export default EventParticipantItem;
