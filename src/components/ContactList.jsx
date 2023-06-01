import React from "react";
import css from "./ContactList.module.css"
import { ContactItem } from "./ContactItem";

export const ContactList = ({ contactFilter, deleteContact }) => {
  return (
    <ul className={css.contact_list}>
      {contactFilter().map(({ id, name, number }) => {
        return (
          <ContactItem
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            key={id}
          />
        );
      })}
    </ul>
  )
}