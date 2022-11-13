import { Field } from 'formik';
import { css } from 'styled-components';

import { styled } from '../../../styles';

const labelStyles = css`
  padding: 0 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const InputComponent = styled(Field)(
  ({ theme }) => css`
    padding: 15px;
    color: ${theme.darkTheme.primaryTextColor};
    font-size: 16px;
    font-weight: bold;
    background-color: ${theme.darkTheme.primaryButtonColor};
    border: none;
    border-radius: 10px;
    caret-color: auto;
    outline: none;

    &:hover,
    &:focus {
      background-color: ${theme.darkTheme.messageColor};
    }
  `,
);

export const LabelComponent = styled.label(
  ({ theme }) => css`
    margin-bottom: 10px;
    line-height: 16px;
    color: ${theme.darkTheme.primaryTextColor};

    ${labelStyles}
  `,
);

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.p(
  ({ theme }) => css`
    color: ${theme.darkTheme.errorColor};

    ${labelStyles}
  `,
);
