import { Form } from 'formik';
import { css } from 'styled-components';

import { styled } from '../../../styles';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddFriendsDialogueWrapper = styled.div(
  ({ theme }) => css`
    position: absolute;
    z-index: 1;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${theme.darkTheme.primaryTextColor};
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: auto;
    }
  `,
);

export const AddFriendsDialogueContent = styled.div(
  ({ theme }) => css`
    width: 500px;
    height: 250px;
    background-color: ${theme.darkTheme.modalColor};
    box-shadow: 0px 0px 27px 11px rgba(0, 0, 0, 0.58);

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: calc(100% - 40px);
    }
  `,
);

export const AddFriendsDialogueHeader = styled.div(
  ({ theme }) => css`
    padding: 15px 20px;
    width: 100%;
    height: 50px;
    background-color: ${theme.darkTheme.modalColor};
  `,
);

export const AddFriendsDialogueBody = styled.div(
  ({ theme }) => css`
    padding: 15px 20px;
    width: 100%;
    height: 130px;
    background-color: ${theme.darkTheme.modalColor};

    label {
      padding: 0;
    }
  `,
);

export const AddFriendsDialogueFooter = styled.div(
  ({ theme }) => css`
    padding: 15px 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
    width: 100%;
    height: auto;
    background-color: ${theme.darkTheme.modalColor};
  `,
);
