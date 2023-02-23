import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactsList.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilterContacts } from 'redux/selectors';
import { deleteContacts, fetchContacts } from 'redux/contactAction';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
          <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
