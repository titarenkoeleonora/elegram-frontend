import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { logIn } from '../../../store/actions/authActions';
import { LogInData } from '../../../types';
import { useAppDispatch } from '../../../utils/hooks/reduxHooks';
import Button from '../../UI/Buttons/Button/Button';
import Input from '../../UI/Input/Input';
import { ButtonsContainer, FormContainer, LoginWrapper } from './Login.styles';

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const initialValues: LogInData = {
    mail: '',
    password: '',
  };

  const loginValidationSchema = Yup.object().shape({
    mail: Yup.string().email('Invalid e-mail format').required('E-mail is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSignUpCLick = () => navigate('/registration');

  const onSubmit = (values: LogInData) => dispatch(logIn(values, navigate));

  return (
    <LoginWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
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
            <ButtonsContainer>
              <Button type="button" secondary onClick={onSignUpCLick}>
                Sign up
              </Button>
              <Button primary type="submit" disabled={!isValid || !dirty}>
                Log in
              </Button>
            </ButtonsContainer>
          </FormContainer>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default LoginPage;
