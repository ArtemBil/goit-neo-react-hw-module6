import React from 'react';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
import Notification from '../Notification/index.js';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const searchTerm = useSelector(state => state.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredContacts.length ? (
    <ul className="flex flex-col gap-2">
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
        ></Contact>
      ))}
    </ul>
  ) : (
    <Notification />
  );
};

export default ContactList;
