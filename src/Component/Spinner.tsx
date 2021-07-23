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
    spinner:{
      margin:0,
      padding:0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight:'100vh',
    },
  }),
);



const  Spinner =  () =>{
  const classes = useStyles();
  return(
    <div>
      <Modal
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className={classes.spinner}>
            <CircularProgress color="secondary" />
          </div>
        </div>

      </Modal>

    </div>
  )
}

export default Spinner;