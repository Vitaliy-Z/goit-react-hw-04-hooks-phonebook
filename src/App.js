import { useState } from 'react';
import ContactForm from './components/contactForm/contactForm';
import Filter from './components/filter/filter';
import ContactList from './components/contactList/contactList';
import './App.css';
import useLocalStorage from './localStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const onFormSubmit = data => {
    console.log(data);
    if (data.name === '' && data.number === '') {
      alert('Please, enter name and number');
      return;
    }

    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert(data.name + ' is already in contacts')
      : setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = idContact =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idContact),
    );

  return (
    <div className="container">
      <h1 className="title">phonebook</h1>
      <ContactForm onFormSubmit={onFormSubmit} />
      <h2 className="title-contacts">contacts</h2>
      <Filter handleFilterInput={e => setFilter(e.target.value)} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
