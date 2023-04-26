import React from 'react';
import PropTypes from 'prop-types';
import { Item, Element, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <Item>
      <Element>{name}:</Element>
      <Element>{number}</Element>
      <Button id={id} onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
