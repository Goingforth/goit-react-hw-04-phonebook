import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container } from './Container.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter] = useState('');

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

  // updateFilter = evt => {
  //   this.setState({ filter: evt.target.value });
  // };
  // newContacts = () => {
  //   return this.state.contacts.filter(el =>
  //     el.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //   );
  // };

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  // componentDidMount() {
  //   const contactsInitial = localStorage.getItem('contacts');
  //   this.setState({ contacts: JSON.parse(contactsInitial) });
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  //  const filteredContacts = this.newContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts </h2>
      {/* <Filter handleChange={updateFilter} value={filter} /> */}
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </Container>
  );
}

export default App;
