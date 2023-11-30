import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values,{ resetForm }) => {
    // You can perform the form submission logic here.
    // For example, you might want to make an API request or send an email.
    try {
      const response = await fetch('https://getform.io/f/adecced2-be7f-4144-b580-a59e721b7514', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        resetForm();
        // Redirect to the thank-you page
        window.location.href = 'https://getform.io/thank-you?id=adecced2-be7f-4144-b580-a59e721b7514';
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form method="POST" action="" className='flex flex-col max-w-[600px] w-full p-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Contact</p>
          <p className='text-white py-4'>Submit the form below or shoot me an email - elham.mirzavand@gmail.com</p>
        </div>

        <Field className='bg-white p-2' type="text" name="name" placeholder="Name" />
        <ErrorMessage className='text-[#49362f] text-xs font-bold' name="name" component="div" />

        <Field className='my-4 bg-white p-2' type="email" name="email" placeholder="Email" />
        <ErrorMessage className='text-[#49362f] text-xs font-bold' name="email" component="div" />

        <Field as="textarea" className='bg-white p-2' rows={10} cols={10} name="message" placeholder="Message" />
        <ErrorMessage className='text-[#49362f] text-xs font-bold' name="message" component="div" />

        <button type="submit" className='text-white border-2 hover:bg-[#f0dbc2] hover:border-[#f0dbc2] px-4 py-3 my-8 mx-auto flex items-center'>
          Let's be in touch
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;