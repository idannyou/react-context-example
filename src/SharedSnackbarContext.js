import React from 'react';

import SharedSnackbar from './SharedSnackbar';

const SharedSnackbarContext = React.createContext();

const style = {
  display: 'flex',
  justifyContent: 'center'
};

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

    return (
      // Note that Providers and Consumers do not take in Style Props
      <SharedSnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: isOpen,
          message
        }}
      >
        <div style={style}>
          {/* The following Components are Consumers; 
        they will import SharedSnackbarConsumer to access actions
        and state of the app */}
          <SharedSnackbar />
          {children}
        </div>
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
