import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(1),
//   },
// }));

const Input: React.FC<any> = forwardRef((props, ref) => {
  //   const styles = useStyles();

  return (
    <>
      <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props}></TextField>
    </>
  );
});

export default Input;
