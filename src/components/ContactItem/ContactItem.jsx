import { ButtonDelete, Item } from './ContactItem.styled';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <span>{name}:</span> <span>{number}</span>{' '}
      <ButtonDelete
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};
export default ContactItem;
