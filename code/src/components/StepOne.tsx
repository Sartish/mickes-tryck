import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

type Profile = {
  firstname: string;
  lastname: string;
  email: string;
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
    console.log(data);
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
        <FileInput name="files" control={control} />
        <TextField
          id="outlined-multiline-static"
          label="messege"
          multiline
          rows={4}
          defaultValue="other info you want to add?"
          fullWidth
        />
        <FormButton>Next</FormButton>
      </Form>
    </MainContainer>
  );
};

export default StepOne;
