import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/operations';
import { selectContacts, selectError, selectIsLoading } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="mt-5">Phonebook</h1>
      <ContactForm />

      <h2 className="mt-5">Contacts</h2>
      <Filter />

      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
};

export default App;
