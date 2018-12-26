import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbarContext';

const SharedSnackbar = () => {
  return (
    <SharedSnackbarConsumer>
      {({ snackbarIsOpen, message, closeSnackbar }) => {
        return (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={snackbarIsOpen}
            autoHideDuration={2000}
            onClose={closeSnackbar}
            message={message}
            action={[
              <IconButton key="close" color="inherit" onClick={closeSnackbar}>
                <Close />
              </IconButton>
            ]}
          />
        );
      }}
    </SharedSnackbarConsumer>
  );
};

export default SharedSnackbar;
