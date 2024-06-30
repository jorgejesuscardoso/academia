import { useState } from 'react';
import { LoginApi } from '../../service/loginApi';
import { SetLocalStorage } from '../../utils/localStorage';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Preencha todos os campos',
          showConfirmButton: false,
          timer: 1000
        });
        return;
      }
      const login = await LoginApi({ username, senha: password });
      
      if (login.error) {
        setError(login.error);
      }
      
      SetLocalStorage('user', login);
  
      if (login.role === 'Admin') {
        setError('');
        setLoading('Logado.');
  
        setTimeout(() => {
          setLoading('Redirecionando...');
        }, 1000)
  
        setTimeout(() => {
          navigate('/home');
        }, 3000)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Usuário não autorizado',
          showConfirmButton: false,
          timer: 1000
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro ao tentar logar',
        showConfirmButton: false,
        timer: 1000
        });
    }
  };

  return (
    <Container>
      <form onSubmit={ (e) => {
        e.preventDefault();
        handleLogin();
      }}>

        <img src="academiaWhite.png" alt="" />

        <h3>Seja bem-vindo(a) ao Sistema da Academia XYZ</h3>

       <div>
          <label htmlFor="user">Username:</label>
          <input
              type="user"
              id='user'
              value={username}
              onChange={(e) => {
                setUser(e.target.value);
                setError('');
              }}
          />
       </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
        </div>
        <button 
          type="submit"
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
