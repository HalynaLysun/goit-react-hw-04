import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.wrapper}>
      <div>
        <h1>
          <RiUser3Fill />
          {name}
        </h1>
        <p>
          <BiSolidPhone />
          {number}
        </p>
      </div>

      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
