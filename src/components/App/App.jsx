import SearchBox from '../SearchBox';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList/index.js';

function App() {
  return (
    <div className="container m-4">
      <h1 className="text-2xl font-semibold mb-5">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList/>
    </div>
  );
}

export default App;
