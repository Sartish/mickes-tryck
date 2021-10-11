import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useData } from "./DataContext";
import MainContainer from './MainContainer';
import Form from './Form';
import Input from './Input';
import FormButton from './FormButton';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { FileInput } from './FileInput';
import * as yup from 'yup';

type Profile = {
  firstname: string;
  lastname: string;
  email: string;
};

type values = {
  setValues: string;
  data: string;
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

const StepOne = () => {
  const [setValues, data] = useState<values>({
    setValues: '',
    data: '',
  });
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: { firstName: data, lastName: data, email: data, files: data },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  // data received in type of profile
  const onSubmit = (data: Profile) => {
    history.push('./step2');
    // @ts-ignore
    // setValues(data);
  };

  return (
    <MainContainer>
      {/* <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          // helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          // helperText={errors?.lastName?.message}
        />
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          // helperText={errors?.email?.message}
          required
        />
        <FileInput name="files" control={control} />
        <FormButton>Next</FormButton>
      </Form>
    </MainContainer>
  );
};

export default StepOne;
