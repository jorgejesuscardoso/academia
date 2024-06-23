import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'
import Login from './pages/login/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={<LayOut />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
