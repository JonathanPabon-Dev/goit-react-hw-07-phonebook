import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        pattern="^[\p{L}]+((['\- ][\p{L} ])?[\p{L}]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        className={css.filterInput}
      />
    </>
  );
};

export default Filter;
