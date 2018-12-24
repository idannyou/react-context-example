import React, { Component } from 'react';
import { SharedSnackBarProvider } from './SharedSnackbarContext';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <SharedSnackBarProvider>
        <Button value="A" />
        <Button value="B" />
      </SharedSnackBarProvider>
    );
  }
}

export default App;
