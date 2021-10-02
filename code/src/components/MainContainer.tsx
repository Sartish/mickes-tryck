import React from 'react';
// import styled from 'styled-components';
import FormHeader from './FormHeader';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexdirection: 'column',
    alignItems: 'center',
  },
}));

const Form: React.FC<any> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <>
      <FormHeader />
      <Container className={styles.root} component="main" maxwidth="xs" {...props}>
        {children}
      </Container>
    </>
  );
};

export default Form;
