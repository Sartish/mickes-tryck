import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import MainContainer from './MainContainer';
import Form from './Form';
import Input from './Input';
import FormButton from './FormButton';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  firstname: string;
  lastname: string;
}

const StepOne: React.FC<InputProps> = () => {
  const { handleSubmit, register } = useForm<InputProps>({
    // @ts-ignore:next-line
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  // our onsubmit receives data from type "profile"
  // const onSubmit = handleSubmit((data) => {
  //   history.push('/step2');
  // });
  const onSubmit = handleSubmit((data) => {
    history.push('/step2');
  });

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
          Step One
        </Typography>
        <Form>
          <form onSubmit={onSubmit}>
            <label htmlFor="firstname">First Name</label>
            <Input ref={register} id="firstname" name="firstname" type="text" />
            <label htmlFor="lastname">Last Name</label>
            <Input ref={register} id="lastname" name="lastname" type="text" />
            <FormButton type="submit">Next</FormButton>
          </form>
        </Form>
      </MainContainer>
    </>
  );
};

export default StepOne;
