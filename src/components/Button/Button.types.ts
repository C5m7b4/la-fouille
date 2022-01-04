import { MouseEventHandler } from 'react';

export interface ButtonProps {
  type: 'primary';
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
