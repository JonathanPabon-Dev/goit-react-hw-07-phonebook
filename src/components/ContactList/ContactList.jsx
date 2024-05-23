import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contact);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 &&
        filteredContacts.map(contact => (
          <ContactItem cId={contact.id} key={contact.id} />
        ))}
    </ul>
  );
};

export default ContactList;
