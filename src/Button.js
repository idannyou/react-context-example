import { Button as ButtonCore } from '@material-ui/core';
import React from 'react';

const style = {
  alignSelf: 'center',
  margin: '1rem',
  height: '2rem'
};

const Button = ({ onClickAction, color, value }) => {
  return (
    <ButtonCore
      style={style}
      variant="contained"
      color={color}
      onClick={onClickAction}
    >
      {value}
    </ButtonCore>
  );
};

export default Button;
