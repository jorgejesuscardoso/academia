import { useState } from 'react';
import { LoginApi } from '../../service/loginApi';
import { SetLocalStorage } from '../../utils/localStorage';
import { Container } from './style';
import { loginLogo } from '../../utils/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Preencha todos os campos');
      return;
    }
    const login = await LoginApi({ username, senha: password });
    
    if (login.error) {
      setError(login.error);
    }
    
    SetLocalStorage('user', login);

    if (login.role === 'Admin') {
      setError('');
      setLoading('Carregando...');

      setTimeout(() => {
        navigate('/home');
      }, 2000)
    } else {
      setError('Acesso negado');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={ (e) => {
        e.preventDefault();
        handleLogin();
       }}>
        <div>
          <img src={ loginLogo } alt="Logomarca" title='Logomarca' />
        </div>
        <input
          type="user"
          placeholder="user"
          value={username}
          onChange={(e) => {
            setUser(e.target.value);
            setError('');
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
        />
        <button 
          type="submit"
          className='success'
        >
          Login
        </button>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='success'>{loading}</p>}
      </form>
    </Container>
  );
}

export default Login;
