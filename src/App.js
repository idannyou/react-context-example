import React, { Component } from 'react';
import {
  SharedSnackbarConsumer,
  SharedSnackBarProvider
} from './SharedSnackbarContext';
import Button from './Button';

const handleOnClick = ({ action, value = '' }) => _ => {
  action(`You Clicked ${value}`);
};

const ToogleFooter = ({ color = 'primary', value }) => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        color={color}
        onClickAction={handleOnClick({
          action: openSnackbar,
          value
        })}
        value={value}
      />
    )}
  </SharedSnackbarConsumer>
);

class App extends Component {
  render() {
    return (
      // Provider contains the state of the app
      <SharedSnackBarProvider>
        <React.Fragment>
          <ToogleFooter color={'secondary'} value={'Button A'} />
          <ToogleFooter value={'Button B'} />
        </React.Fragment>
      </SharedSnackBarProvider>
    );
  }
}

export default App;
