import React from 'react';
import PropTypes from 'prop-types';
import { ContactsListWraper, ContactsListItem } from './ContactsList.styled';
import { ContactItem } from './ContactItem/ContactItem';

export function ContactsList({ contacts, searchLine, onDelete }) {
  const getFilteredContactList = (contacts, searchLine) => {
    const filterL = searchLine.toLowerCase();
    return contacts.filter(elem => elem.name.toLowerCase().includes(filterL));
  };

  return (
    <ContactsListWraper>
      {getFilteredContactList(contacts, searchLine).map(elem => {
        return (
          <ContactsListItem key={elem.id}>
            <ContactItem item={elem} onDelete={onDelete} />
          </ContactsListItem>
        );
      })}
    </ContactsListWraper>
  );
}

ContactsList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
};
