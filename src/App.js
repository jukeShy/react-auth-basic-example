import { useContext } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthProvider';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const ProtectedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  const { isLogged } = auth;

  console.log(isLogged);

  return (
    <Route
      {...rest}
      render={() => {
        return isLogged ? children : <Redirect to='/login' />;
      }}
    />
  );
};

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ProtectedRoute path='/' exact>
            <Home />
          </ProtectedRoute>
          <Route path='/login' exact component={Login} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export { App };
