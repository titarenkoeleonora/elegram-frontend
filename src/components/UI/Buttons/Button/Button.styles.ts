import { css } from 'styled-components';

import { styled } from '../../../../styles';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const primaryButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.primaryTextColor};
  color: ${({ theme }) => theme.darkTheme.backgroundColor};
`;

const secondaryButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.primaryColor};
  color: ${({ theme }) => theme.darkTheme.primaryTextColor};
`;

const getButtonStyles = (primary?: boolean, secondary?: boolean) => {
  if (primary) {
    return primaryButtonStyles;
  }

  if (secondary) {
    return secondaryButtonStyles;
  }
};

export const ButtonWrapper = styled.button<ButtonProps>(
  ({ primary, secondary }) => css`
    padding: 10px 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 105px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    white-space: nowrap;
    border: none;
    border-radius: 20px;

    &:hover,
    &:focus {
      text-decoration: line-through;
    }

    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }

    ${getButtonStyles(primary, secondary)}
  `,
);
