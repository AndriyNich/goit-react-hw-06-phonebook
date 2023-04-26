import React from 'react';
import { useDispatch } from 'react-redux';
import { FieldInput } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

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
