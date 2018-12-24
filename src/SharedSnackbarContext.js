import React from 'react';

import SharedSnackbar from './SharedSnackbar';

const SharedSnackbarContext = React.createContext();

export class SharedSnackBarProvider extends React.Component {
  state = {
    isOpen: false,
    message: ''
  };

  openSnackbar = message => {
    this.setState({ message, isOpen: true });
  };

  closeSnackbar = () => {
    this.setState({ message: '', isOpen: false });
  };

  render() {
    const { children } = this.props;
    const { isOpen, message } = this.state;
    console.log({ children });
    return (
      <SharedSnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: isOpen,
          message
        }}
      >
        <SharedSnackbar />
        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
