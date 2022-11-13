import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import LoginPage from './components/Auth/Login/Login';
import RegistrationPage from './components/Auth/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './components/UI/Main/Main';
import { GlobalStyles, theme } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
      </Main>
    </ThemeProvider>
  );
};

export default App;
