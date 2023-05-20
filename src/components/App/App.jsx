import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container } from './Container.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const useLocalStorage = (key, defaultState) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultState;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);

  const [filter, setFilter] = useState('');

  const createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    const contactsName = contacts.map(el => el.name);
    const name = data.name;
    contactsName.includes(name)
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts.concat(newContact));
  };

  const updateFilter = evt => {
    setFilter(evt.target.value);
  };

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts </h2>
      <Filter handleChange={updateFilter} value={filter} />
      <ContactList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
