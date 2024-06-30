import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'
import Login from './pages/login/Login'
import { Client } from './pages/client/Client'
import CadastroDeClientes from './pages/client/CadastroDeCliente'
import Planos from './pages/plans/Planos'
import CadastroPlano from './components/tables/list-Plano/CadastroPlano'
import Instrutores from './pages/instrutores/Instrutores'
import Usuarios from './pages/users/Usuarios'
import CadastroDeInstrutores from './components/tables/list-instrutores/CadastroDeInstrutores'
import CadastrarUsuario from './components/tables/list-usuario/Cadastrar'
import Arquivo_X from './streaming/series/ArquivoX./Arquivo_X'
import Loki from './streaming/series/Loki/Loki'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={<LayOut />} >
        <Route path='/home' element={<Home />} />

        <Route path="/clientes" element={<Client />} />
        <Route path="/clientes/cadastro" element={ <CadastroDeClientes /> } />

        <Route path="/planos" element={ < Planos /> } />
        <Route path="/planos/cadastro" element={<CadastroPlano /> } />        

        <Route path="/instrutores" element={<Instrutores />} />
        <Route path='/instrutores/cadastro' element={ <CadastroDeInstrutores /> } />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/cadastro" element={<CadastrarUsuario />} />
      </Route>
        <Route path="/series/arquivo-x" element={<Arquivo_X /> } />
        <Route path="/series/loki" element={<Loki /> } />
    </Routes>
  )
}

export default App
