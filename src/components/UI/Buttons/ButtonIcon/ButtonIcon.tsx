import { FC, HTMLAttributes } from 'react';

import { Button, ButtonIconWrapper, Icon } from './ButtonIcon.styles';

interface ButtonIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
  color?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  small?: boolean | undefined;
  colorTheme?: 'primary' | 'secondary' | 'accept' | 'reject';
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  type = 'button',
  icon,
  alt,
  color,
  disabled,
  small,
  colorTheme = 'primary',
  onClick,
}) => (
  <ButtonIconWrapper>
    <Button
      type={type}
      colorTheme={colorTheme}
      small={small}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon src={icon} alt={alt} />
    </Button>
    {children}
  </ButtonIconWrapper>
);

export default ButtonIcon;
