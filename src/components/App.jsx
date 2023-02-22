import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactsList/ContactsList';
import { Styles, PhonebookWrap, MainTitle, SecondaryTitle } from './Styles';

export function App() {
  return (
    <>
      <Styles />
      <PhonebookWrap>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </PhonebookWrap>
    </>
  );
}
