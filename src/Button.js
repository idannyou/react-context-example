import { Button as ButtonCore } from '@material-ui/core';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbarContext';

const renderButtonName = value => {
  return `Button ${value}`;
};

const handleOnClick = ({ action, value }) => () => {
  action(`You Clicked ${value}`);
};

const style = {
  alignSelf: 'center',
  margin: '1rem',
  height: '2rem'
};

const Button = ({ color, value }) => {
  return (
    <SharedSnackbarConsumer>
      {({ openSnackbar }) => {
        return (
          <ButtonCore
            style={style}
            variant="contained"
            color={color || 'primary'}
            onClick={handleOnClick({ action: openSnackbar, value })}
          >
            {renderButtonName(value)}
          </ButtonCore>
        );
      }}
    </SharedSnackbarConsumer>
  );
};

export default Button;
