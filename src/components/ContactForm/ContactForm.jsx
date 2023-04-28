import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  FieldLabel,
  Field,
  ErrorMessage,
  Button,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const contains = (contacts, { name }) => {
  return contacts.filter(elem => elem.name.toLowerCase() === name.toLowerCase())
    .length;
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, actions) => {
    if (contains(contacts, values) <= 0) {
      dispatch(addContact(values.name, values.number));
    } else {
      alert(`User "${values.name}" is already in contacts`);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FieldLabel htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FieldLabel>
        <FieldLabel htmlFor="">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </FieldLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
