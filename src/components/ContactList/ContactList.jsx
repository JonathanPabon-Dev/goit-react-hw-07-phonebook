import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

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
