import React from 'react';
import { AppWraper, MainTitle, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export function App() {
  return (
    <AppWraper>
      <MainTitle>Phone book</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </AppWraper>
  );
}
