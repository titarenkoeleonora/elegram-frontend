import { ErrorMessage } from 'formik';
import React, { FC, HTMLAttributes } from 'react';

import { ErrorText, InputComponent, InputContainer, LabelComponent } from './Input.styles';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  defaultValue: string;
  type?: string;
}

const Input: FC<InputProps> = ({ label, name, defaultValue, onChange, placeholder = '', type }) => (
  <InputContainer>
    {label && <LabelComponent>{label}</LabelComponent>}

    <InputComponent
      name={name}
      type={type ? type : 'text'}
      value={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
    <ErrorMessage name={name}>{(message) => <ErrorText>{message}</ErrorText>}</ErrorMessage>
  </InputContainer>
);

export default Input;
