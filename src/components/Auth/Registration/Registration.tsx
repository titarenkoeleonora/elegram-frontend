import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { signUp } from '../../../store/actions/authActions';
import { SignUpData } from '../../../types';
import { useAppDispatch } from '../../../utils/hooks/reduxHooks';
import Button from '../../UI/Buttons/Button/Button';
import Input from '../../UI/Input/Input';
import { ButtonsContainer, FormContainer, RegistrationWrapper } from './Registration.styles';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const initialValues: SignUpData = {
    mail: '',
    password: '',
    username: '',
  };

  const registrationValidationSchema = Yup.object().shape({
    mail: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
    password: Yup.string().required('Password is required'),
    username: Yup.string().required('Username is required'),
  });

  const onLoginCLick = () => navigate('/login');

  const onSubmit = (values: SignUpData) => dispatch(signUp(values, navigate));

  return (
    <RegistrationWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, isValid, dirty }) => (
          <FormContainer>
            <Input
              label="E-mail"
              id="mail"
              name="mail"
              type="email"
              onChange={handleChange}
              value={values.mail}
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            <Input
              label="Username"
              id="username"
              name="username"
              onChange={handleChange}
              value={values.username}
            />
            <ButtonsContainer>
              <Button type="button" secondary onClick={onLoginCLick}>
                Log in
              </Button>
              <Button primary type="submit" disabled={!isValid || !dirty}>
                Sign up
              </Button>
            </ButtonsContainer>
          </FormContainer>
        )}
      </Formik>
    </RegistrationWrapper>
  );
};

export default RegistrationPage;
