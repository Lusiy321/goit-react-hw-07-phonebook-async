import { List, Button, Item } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const findContact = () => {
    return contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filterContacts.trim().toLowerCase());
    });
  };

  const foundContacts = findContact();
  return (
    <List>
      {foundContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
