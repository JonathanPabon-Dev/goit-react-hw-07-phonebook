import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const generateId = () => {
    const randomId = Math.floor(Math.random() * 10000);
    return randomId.toString().padStart(4, '0');
  };

  const idExists = id => {
    return contacts.some(contact => contact.id === `id-${id}`);
  };

  const handleAddContact = e => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const number = document.querySelector('#number').value;
    let newId = generateId();
    while (idExists(newId)) {
      newId = generateId();
    }
    const newContact = { id: `id-${newId}`, name, number };

    dispatch(addContact(newContact));
  };

  return (
    <>
      <form className={css.contactForm} onSubmit={handleAddContact}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          pattern="^[\p{L}]+((['\- ][\p{L} ])?[\p{L}]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}(?:[\-.\s]?\(?\d{1,3}\)?)?(?:[\-.\s]?\d{1,4}){2}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
        <button type="submit" className="btn btn-success mt-4">
          <i className="bi bi-plus-lg"></i>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
