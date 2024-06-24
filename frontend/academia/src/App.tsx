import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'
import Login from './pages/login/Login'
import { Client } from './pages/client/Client'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={<LayOut />} >
        <Route path='/home' element={<Home />} />

        <Route path="/clientes" element={<Client />} />
        <Route path="/clientes/cadastro" element={ <h1>cadastro de clientes</h1> } />

        <Route path="/planos" element={<h1>Planos</h1>} />
        <Route path="/planos/cadastro" element={<h1>cadastro de planos</h1>} />        

        <Route path="/instrutores" element={<h1>Instrutores</h1>} />
        <Route path='/instrutores/cadastro' element={ <h1>cadastro</h1> } />

        <Route path="/usuarios" element={<h1>Usuários</h1>} />
        <Route path="/usuarios/cadastro" element={<h1>cadastro</h1>} />

      </Route>
    </Routes>
  )
}

export default App
