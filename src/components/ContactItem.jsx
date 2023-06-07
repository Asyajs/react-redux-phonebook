import React from "react";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/store";

export const ContactItem = (props) => {
  const { id, name, number } = props;
  const dispatch = useDispatch();

  return (
    <li className={css.contact_item} key={id}>
      {name}:  {number}
      <button
        type="button"
        className={css.delete_button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  )
}
