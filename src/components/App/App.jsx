import { v4 as uuid4 } from 'uuid';
import SearchBox from '../SearchBox';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Notification from '../Notification';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contactsSlice.js';
import { changeFilter } from '../../redux/filtersSlice.js';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const searchTerm = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const searchContact = (event) => {
    const value = event.target.value;

    dispatch(changeFilter(value));
  };

  const submitContactForm = async (data) => {
    const id = uuid4();

    dispatch(addContact({ id, ...data }));
  };

  const onDeleteContact = (id) => () => {
    dispatch(deleteContact(id));
  };


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container m-4">
      <h1 className="text-2xl font-semibold mb-5">Phonebook</h1>
      <ContactForm onSubmitContactForm={submitContactForm} />
      <SearchBox searchContact={searchContact} />
      {filteredContacts.length ? (
        <ContactList
          contacts={filteredContacts}
          deleteContact={onDeleteContact}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
