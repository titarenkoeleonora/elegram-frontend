import { ErrorMessage } from 'formik';
import React, { FC, HTMLAttributes } from 'react';

import { ErrorText, InputComponent, InputContainer, LabelComponent } from './Input.styles';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  value?: string | number;
}

const Input: FC<InputProps> = ({ label, name, value, onChange, placeholder = '', type }) => (
  <InputContainer>
    {label && <LabelComponent>{label}</LabelComponent>}

    <InputComponent
      name={name}
      type={type ? type : 'text'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
    <ErrorMessage name={name}>{(message) => <ErrorText>{message}</ErrorText>}</ErrorMessage>
  </InputContainer>
);

export default Input;
