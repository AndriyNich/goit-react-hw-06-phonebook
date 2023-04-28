import React from 'react';
import { useSelector } from 'react-redux';
import { ContactsListWraper, ContactsListItem } from './ContactsList.styled';
import { ContactItem } from './ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContactList = (contacts, filter = '') => {
  const filterL = filter.toLowerCase().trim();
  return contacts.filter(elem => elem.name.toLowerCase().includes(filterL));
};

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ContactsListWraper>
      {getFilteredContactList(contacts, filter).map(elem => {
        return (
          <ContactsListItem key={elem.id}>
            <ContactItem item={elem} />
          </ContactsListItem>
        );
      })}
    </ContactsListWraper>
  );
}
