import React from "react";
import css from "./ContactList.module.css";

export const ContactItem = (props) => {
  const {id, name, number, deleteContact } = props
  return (
    <li className={css.contact_item} key={id}>
      {name}:  {number}
      <button
        type="button"
        className={css.delete_button}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  )
}
