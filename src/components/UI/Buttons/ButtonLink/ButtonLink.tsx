import { FC, HTMLAttributes } from 'react';

import { ButtonLinkWrapper } from './ButtonLink.styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const ButtonLink: FC<ButtonProps> = ({ children, type = 'button', disabled, onClick }) => {
  return (
    <ButtonLinkWrapper type={type} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonLinkWrapper>
  );
};

export default ButtonLink;
