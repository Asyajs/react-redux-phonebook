import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Section } from './Section';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie', number: '459-12-56' },
  { id: 'id-2', name: 'Hermion', number: '443-89-12' },
  { id: 'id-3', name: 'Eden', number: '645-17-79' },
  { id: 'id-4', name: 'Annie', number: '227-91-26' },
]
const App = () => {
  // state before update
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermion', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie', number: '227-91-26' },
  //   ],

  // filter: ''
  // };

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(initialContacts);

  // componentDidMount() {
  //  console.log('App componentDidMount');
  //   const contacts = localStorage.getItem("contacts");
  //   const parseContacts = JSON.parse(contacts);

  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //  console.log('App componentDidUpdate');

  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  useEffect(() => {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      // this.setState({ contacts: parseContacts });
      setContacts(parseContacts);
    }
  }, []);

  const handleFilterChange = (event) => {
    // this.setState({ filter: event.target.value })
    setFilter(event.target.value)
  }

  const contactFilter = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const addNewContact = (contactProps) => {
    // this.setState(prev => ({
    //   contacts: [...prev.contacts, { id: nanoid(), ...contactProps }]
    //   name: contactProps.name, number: contactProps.number( ...contactProps)
    // }))
    setContacts((prevContact) => {
      console.log("prev", prevContact);
      return [...prevContact, { id: nanoid(), ...contactProps }]
    });
  }

  const deleteContact = (id) => {
    // this.setState(prev => ({
    // contacts: prev.contacts.filter(contact => contact.id !== id)
    // }));
    // full set
    // setContacts((prevContact) => {
    //   const newArray = prevContact.filter(contact => contact.id !== id)
    //   return newArray;
    // })
    // short set
    setContacts(prev => prev.filter(contact => contact.id !== id))
  };

  const checkName = (name) => {
    return contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  // render page

  return (
    <>
      <Section title='Phonebook'>
        <ContactForm
          addNewContact={addNewContact}
          checkName={checkName}
        />
      </Section>
      <Section title='Contacts'>
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <ContactList
            contactFilter={contactFilter}
            deleteContact={deleteContact}
          />
      </Section>
    </>
  );
}


export default App;
