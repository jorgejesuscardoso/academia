import { useState } from 'react';
import { LoginApi } from '../../service/loginApi';
import { SetLocalStorage } from '../../service/localStorage';
import { Container } from './style';
import { loginLogo } from '../../utils/icons';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handleLogin = async () => {
    if (!user || !password) {
      setError('Preencha todos os campos');
      return;
    }
    const login = await LoginApi({ user, senha: password });
    
    if (login.error) {
      setError(login.error);
    }
    
    SetLocalStorage('login', login);

    if (login.role === 'Admin') {
      setError('');
      setLoading('Carregando...');

      setTimeout(() => {
        window.location.href = '/home';
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
          value={user}
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
