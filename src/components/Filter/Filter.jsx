import React from 'react';
import PropTypes from 'prop-types';
import { FieldInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label htmlFor="">
      Find contacts by name
      <FieldInput type="text" onChange={handleChangeFilter} />
    </label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
