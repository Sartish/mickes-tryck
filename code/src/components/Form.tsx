import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const Form: React.FC<any> = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <>
      <form className={styles.root} noValidate {...props}>
        {children}
      </form>
    </>
  );
};

export default Form;
