import React, { FC, useState } from 'react';

import './Button.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
  const [buttonState, setButtonState] = useState<string>('hello');
  return (
    <button type="button" className={`Button Button-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
