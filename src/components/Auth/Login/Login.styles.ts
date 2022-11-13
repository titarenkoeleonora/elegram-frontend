import { Form } from 'formik';
import { css } from 'styled-components';

import { styled } from '../../../styles';

export const LoginWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.darkTheme.primaryBackgroundColor};
  `,
);

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  gap: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`;
