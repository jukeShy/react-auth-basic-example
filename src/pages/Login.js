import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const { isLogged, login } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) return history.push('/');
  }, [isLogged, history]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

export { Login };
