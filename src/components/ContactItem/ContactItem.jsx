import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactItem.module.css';
import { deleteContact } from '../../redux/contactSlice';
import PropTypes from 'prop-types';

const ContactItem = ({ cId }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);

  const contact = contacts.find(contact => contact.id === cId);

  const handleDeleteBtn = id => {
    dispatch(deleteContact({ id }));
  };

  return (
    <li id={contact.id} className={css.contact}>
      <div className={css.contactInfo}>
        <span>
          {contact.name}: {contact.number}
        </span>
        <button
          type="button"
          title="Delete"
          onClick={() => {
            handleDeleteBtn(contact.id);
          }}
          className="btn btn-danger"
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  cId: PropTypes.string,
};

export default ContactItem;
