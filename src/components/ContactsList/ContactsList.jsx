import React from 'react';
import PropTypes from 'prop-types';
import { ContactsListWraper, ContactsListItem } from './ContactsList.styled';
import { ContactItem } from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const getFilteredContactList = (contacts, filter = '') => {
  const filterL = filter.toLowerCase();
  return contacts.filter(elem => elem.name.toLowerCase().includes(filterL));
};

export function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).filter;

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

ContactsList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  }),
};
