import React from 'react';
import { CircularProgress, Modal } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      opacity: 0.5,
    },
    spinner: {
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
  })
);

interface SpinnerProps {
  loading: boolean;
}

const Spinner = (props: SpinnerProps) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        open={props.loading}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className={classes.spinner}>
            <CircularProgress color="secondary" />
            <p>Loading</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Spinner;
