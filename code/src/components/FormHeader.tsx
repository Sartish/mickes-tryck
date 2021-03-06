import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Permanent Marker',
    textAlign: 'center',
    fontSize: '40px',
    color: '#262a53',
    textShadow: '1px, 1px darkmagneta',
  },
}));

const FormHeader: React.FC<any> = () => {
  const styles = useStyles();
  return (
    <>
      <Typography className={styles.root} component="h1">
        Skicka ett mail till Micke här!
      </Typography>
    </>
  );
};

export default FormHeader;
