import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container } from './Container.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    const contactsName = this.state.contacts.map(el => el.name);
    const name = data.name;
    contactsName.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: prevState.contacts.concat(newContact),
          };
        });
  };

  updateFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  newContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contactsInitial = localStorage.getItem('contacts');
    this.setState({ contacts: JSON.parse(contactsInitial) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.newContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />

        <h2>Contacts </h2>

        <Filter handleChange={this.updateFilter} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
