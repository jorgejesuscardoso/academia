import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LayOut from './components/layout/LayOut';
import { Client } from './pages/client/Client';
import CadastroDeClientes from './pages/client/CadastroDeCliente';
import Planos from './pages/plans/Planos';
import CadastroPlano from './components/tables/list-Plano/CadastroPlano';
import Instrutores from './pages/instrutores/Instrutores';
import Usuarios from './pages/users/Usuarios';
import CadastroDeInstrutores from './components/tables/list-instrutores/CadastroDeInstrutores';
import CadastrarUsuario from './components/tables/list-usuario/Cadastrar';
import Perfil from './pages/perfil/perfil';
import Login from './pages/login/Login';
import NotFound from './pages/notfound/NotFound';
import { Shop } from './pages/shopping/Shop';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={<LayOut />} >
        <Route path='/home' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />

        <Route path="/clientes" element={<Client />} />
        <Route path="/clientes/cadastro" element={ <CadastroDeClientes /> } />

        <Route path="/planos" element={ < Planos /> } />
        <Route path="/planos/cadastro" element={<CadastroPlano /> } />        

        <Route path="/instrutores" element={<Instrutores />} />
        <Route path='/instrutores/cadastro' element={ <CadastroDeInstrutores /> } />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/cadastro" element={<CadastrarUsuario />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
