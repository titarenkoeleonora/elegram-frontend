import { Form } from 'formik';

import { styled } from '../../../../../styles';

export const FormWrapper = styled(Form)`
  position: relative;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0px -8px 19px 10px rgba(0, 0, 0, 0.45);
`;

export const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: -440px;
`;
