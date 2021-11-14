import React, { useState } from 'react';
import { Message, useForm } from 'react-hook-form';
// import { useData } from "./DataContext";
import MainContainer from './MainContainer';
import Form from './Form';
import Input from './Input';
import FormButton from './FormButton';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { FileInput } from './FileInput';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

type Profile = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
});

const StepOne = () => {
  // const history = useHistory();
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  // data received in type of profile
  const onSubmit = (data: Profile) => {
    emailjs.init('user_Qp21GQ9MzV22NDKnb7RgF');
    emailjs
      .send('service_uvknhkh', 'template_gxwap2s', {
        from_name: data.firstname + data.lastname,
        reply_to: data.email,
        message: data.message,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // @ts-ignore
          swal({
            text: 'Tack! Micke återkommer inom kort.',
            icon: 'success',
            // @ts-ignore
            button: 'ok',
          });
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstname"
          type="text"
          label="First Name"
          name="firstname"
          error={!!errors.firstname}
          helperText={errors?.firstname?.message}
          required
        />
        <Input
          ref={register}
          id="lastname"
          type="text"
          label="Last Name"
          name="lastname"
          error={!!errors.lastname}
          helperText={errors?.lastname?.message}
          required
        />
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        {/* <FileInput name="files" control={control} /> */}
        <TextField
          ref={register}
          label="message"
          name="message"
          id="message"
          error={!!errors.message}
          helperText={errors?.message?.message}
          required
          multiline
          rows={4}
          fullWidth
        />
        <FormButton>Skicka</FormButton>
      </Form>
    </MainContainer>
  );
};

export default StepOne;
