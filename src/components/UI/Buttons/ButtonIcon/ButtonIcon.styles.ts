import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

import { styled } from '../../../../styles';

interface ButtonProps {
  small?: boolean | undefined;
  colorTheme: string;
}

const getButtonColor = (colorTheme: string): FlattenInterpolation<ThemeProps<string>> => {
  switch (colorTheme) {
    case 'primary':
      return primaryButtonStyles;
    case 'secondary':
      return secondaryButtonStyles;
    case 'accept':
      return acceptButtonStyles;
    case 'reject':
      return rejectButtonStyles;

    default:
      return primaryButtonStyles;
  }
};

const primaryButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.primaryTextColor};
`;

const secondaryButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.primaryButtonColor};
`;

const acceptButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.successColor};
`;

const rejectButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.errorColor};
`;

export const ButtonIconWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    color: ${theme.darkTheme.primaryTextColor};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.15em;
  `,
);

export const Button = styled.button<ButtonProps>(
  ({ colorTheme, small }) => css`
    padding: 0;
    width: ${small ? '20px' : '35px'};
    width: ${small ? '20px' : '35px'};
    display: flex;
    flex-shrink: 0;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    ${getButtonColor(colorTheme)};

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  `,
);

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
