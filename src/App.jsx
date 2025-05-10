import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage.jsx/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />

          <Route
            path='/contacts'
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path='/login'
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />

          <Route
            path='/register'
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />

          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
