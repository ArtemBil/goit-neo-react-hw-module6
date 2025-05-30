import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { addContact } from '../../redux/contactsSlice.js';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';

const addContactFormSchema = object().shape({
  name: string()
    .required('This Field is required')
    .min(3, 'To Short!')
    .max(30, 'To Long!'),
  number: string()
    .required('This field is required')
    .min(3, 'To Short!')
    .max(30, 'To Long!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const submitContactForm = async (data) => {
    const id = uuid4();

    dispatch(addContact({ id, ...data }));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={addContactFormSchema}
      onSubmit={submitContactForm}
    >
      <Form>
        <fieldset className="add-contact-fieldset card max-w-md flex flex-col gap-3 items-start">
          <div className="control flex flex-col w-full">
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" placeholder="Name" className="border rounded-md px-4 py-2 w-full"/>
            <ErrorMessage name="name" component="p" className="field-error" />
          </div>
          <div className="control flex flex-col w-full">
            <label htmlFor="number">Phone</label>
            <Field id="number" name="number" type="text" placeholder="Number" className="border rounded-md px-4 py-2 w-full"/>
            <ErrorMessage name="number" component="p" className="field-error" />
          </div>
          <button type="submit" className="btn">Add contact</button>
        </fieldset>
      </Form>
    </Formik>
  );
}

export default ContactForm;
