import React from "react";
import { useState } from "react";
import css from './ContactForm.module.css';


 export const ContactForm = (props) => {
   const { addNewContact, checkName } = props;
  // const { name, handleNameChange, number, handleNumberChange, handleClick } = props;
  // state = {
  //   name: '',
  //   number: ''
  // }

  // const initialState = {
  //   name: '',
  //   number: ''
  // }

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

//  const handleChangeName = event => {
//     // this.setState({ [event.target.name]: event.target.value })
//    setName(event.target.value)
//    }
   
//  const handleChangeNumber = event => {
//     // this.setState({ [event.target.name]: event.target.value })
//    setNumber(event.target.value)
//    }
   
 const handleChange = (event, name) => {
   if (name === 'name') {
     setName(event.target.value)
   } else {
     setNumber(event.target.value)
   }
  }

 const handleSubmit = e => {
    e.preventDefault();
    if (name && number) {
      if (checkName(name)) {
        alert(`${name} already in contact`)
      } else {
        addNewContact({name, number});
        reset()
      }
    }
  }

 const reset = () => {
    // this.setState({
    //   name: '',
    //   number: ''
    // })
   setName('');
   setNumber('');
  };


  console.log('name', name);
  console.log('num', number);
  return (
    <form autoComplete="off" onSubmit={handleSubmit} >
      <label htmlFor="name">
        <input
          className={css.input}
          value={name}
          onChange={(event)=>handleChange(event, 'name')}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // required
        />
      </label>
      <label htmlFor="number">
        <input
          className={css.input}
          value={number}
          onChange={(event)=>handleChange(event, 'number')}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        // required
        />
      </label>
      <button type="submit" className={css.button_contact} >Add contact</button>
    </form>
  );
};

