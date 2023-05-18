import { List, Message } from './List.styled';
//import ContactItem from 'components/App/ContactItem/ContactItem';
import ContactItem from 'components/ContactItem/ContactItem';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))
      ) : (
        <Message>No contacts in phonebook.</Message>
      )}
    </List>
  );
};
export default ContactList;
