import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactAction';
import { Form, Label, Input, Button } from './ContactsForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const submitForm = newContact => {
    const isExist = contacts.find(
      cont =>
        cont.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );
    if (isExist) {
      return alert(`${newContact.name} is already in contacts`);
    } else if (
      (newContact.name.trim() === '', newContact.number.trim() === '')
    ) {
      return alert('Write all forms');
    }
    dispatch(addContacts(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    submitForm({ name, number, id: nanoid() });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="contact_name">Name</Label>
      <Input
        onChange={handleChange}
        id="contact_name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Mykola, Genka Metla, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="contact_number">Number</Label>
      <Input
        onChange={handleChange}
        value={number}
        id="contact_number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
