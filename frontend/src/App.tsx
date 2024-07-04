import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LayOut from './components/layout/LayOut';
import Login from './pages/login/Login';
import { Client } from './pages/client/Client';
import CadastroDeClientes from './pages/client/CadastroDeCliente';
import Planos from './pages/plans/Planos';
import CadastroPlano from './components/tables/list-Plano/CadastroPlano';
import Instrutores from './pages/instrutores/Instrutores';
import Usuarios from './pages/users/Usuarios';
import CadastroDeInstrutores from './components/tables/list-instrutores/CadastroDeInstrutores';
import CadastrarUsuario from './components/tables/list-usuario/Cadastrar';
import Streaming from './streaming/Streaming';
import SeriesPage from './streaming/series/SeriesPage';

function App() {

  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route element={<LayOut />} >
        <Route path='/' element={<Home />} />

        <Route path="/clientes" element={<Client />} />
        <Route path="/clientes/cadastro" element={ <CadastroDeClientes /> } />

        <Route path="/planos" element={ < Planos /> } />
        <Route path="/planos/cadastro" element={<CadastroPlano /> } />        

        <Route path="/instrutores" element={<Instrutores />} />
        <Route path='/instrutores/cadastro' element={ <CadastroDeInstrutores /> } />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/cadastro" element={<CadastrarUsuario />} />
      </Route>
        <Route path="/serie" element={<Streaming /> } />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/serie/:id/*" element={<Streaming /> } />
        <Route path="/filme/:filme" element={<Streaming />} />
    </Routes>
  )
}

export default App
