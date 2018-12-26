import React, { Component } from 'react';
import { SharedSnackBarProvider } from './SharedSnackbarContext';
import Button from './Button';

class App extends Component {
  render() {
    return (
      // Provider contains the state of the app
      <SharedSnackBarProvider>
        <Button color="primary" value="A" />
        <Button color="secondary" value="B" />
      </SharedSnackBarProvider>
    );
  }
}

export default App;
