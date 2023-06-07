import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Section } from './Section';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/store';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      dispatch(addContact(parseContacts))
    }
  }, []);

  return (
    <>
      <Section title='Phonebook'>
        <ContactForm/>
      </Section>
      <Section title='Contacts'>
        <Filter/>
        <ContactList/>
      </Section>
    </>
  );
}


export default App;


