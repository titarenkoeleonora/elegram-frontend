import { FC, HTMLAttributes } from 'react';

import { ButtonWrapper } from './Button.styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled,
  primary,
  secondary,
  onClick,
}) => (
  <ButtonWrapper
    disabled={disabled}
    primary={primary}
    secondary={secondary}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonWrapper>
);

export default Button;
