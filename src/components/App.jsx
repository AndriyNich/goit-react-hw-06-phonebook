import React, { useState, useEffect } from 'react';
import { AppWraper, MainTitle, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

const LS_LIST = 'contactsList';

export function App() {
  const [contacts, setContacts] = useState(() => {
    let initContacts = localStorage.getItem(LS_LIST);

    if (initContacts) {
      try {
        initContacts = JSON.parse(initContacts);

        if (Array.isArray(initContacts)) {
          return initContacts;
        }
      } catch {}
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_LIST, JSON.stringify(contacts));
  }, [contacts]);

  const contains = ({ name }) => {
    return contacts.filter(elem => elem.name === name).length;
  };

  const handleAddContact = newRecord => {
    if (contains(newRecord)) {
      alert(`${newRecord.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, newRecord]);
  };

  const handelChangeFilter = filter => {
    setFilter(filter);
  };

  const handleDeleteContact = recordId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== recordId));
  };

  return (
    <AppWraper>
      <MainTitle>Phone book</MainTitle>
      <ContactForm onSave={handleAddContact} />
      <Title>Contacts</Title>
      <Filter onChange={handelChangeFilter} />
      <ContactsList
        contacts={contacts}
        searchLine={filter}
        onDelete={handleDeleteContact}
      />
    </AppWraper>
  );
}
