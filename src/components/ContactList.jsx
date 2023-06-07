import React from "react";
import css from "./ContactList.module.css"
import { ContactItem } from "./ContactItem";
import { useSelector } from "react-redux";

export const ContactList = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const contactFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

  return (
    <ul className={css.contact_list}>
      {contactFilter().map(({ id, name, number }) => {
        return (
          <ContactItem
            id={id}
            name={name}
            number={number}
            key={id}
          />
        );
      })}
    </ul>
  )
}