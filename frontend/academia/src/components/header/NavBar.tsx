import { Link, useLocation } from 'react-router-dom'
import { FloatMenu, HeaderContainer, Nav } from './style'
import { useEffect, useState } from 'react'
import { RemoveLocalStorage } from '../../utils/localStorage'

const Navbar = () => {
  const params = useLocation().pathname.split('/')[1];
  const paramsCadastro = useLocation().pathname.split('/')[2];
  const [floatMenu, setFloatMenu] = useState(false)

  useEffect(() => {
    document.addEventListener('click', () => {
      setFloatMenu(false)
    })
  }, [floatMenu])

  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li
            onMouseOver={() => setFloatMenu(false)}
            className={params === 'home' ? 'active' : ''}
          >
            <Link to='/home'>Home</Link>
          </li>

          <li
            onMouseOver={() => setFloatMenu(false)}
            className={params === 'planos' ? 'active' : ''}
          >
            <Link to='/planos'>Planos</Link>
          </li>

          <li
            onMouseOver={() => setFloatMenu(false)}
            className={params === 'clientes' ? 'active' : ''}
          >
            <Link to='/clientes'>Clientes</Link>
          </li>

          <li
            onMouseOver={() => setFloatMenu(false)}
            onClick={() => setFloatMenu(!floatMenu)}
            className={params === 'instrutores' ? 'active' : ''}
          >
            <Link to='/instrutores'>Instrutores</Link>
          </li>

          <li
            onMouseOver={() => setFloatMenu(false)}
            onClick={() => setFloatMenu(!floatMenu)}
            className={params === 'usuarios' ? 'active' : ''}
          >
            <Link to='/usuarios'>Usuários</Link>
          </li>

          <li
            className={paramsCadastro === 'cadastro' ? 'active' : ''}            
          >
            <span
              onMouseOver={() => setFloatMenu(true)}              
            >
              Cadastro
            </span>
          </li>
          <li
            onMouseOver={() => setFloatMenu(false)}
            onClick={ () => RemoveLocalStorage('user') }
            className={params === 'logout' ? 'active' : ''}
          >
            <Link to='/'>Logout</Link>
          </li>
        </ul>
      </Nav>
      {
        floatMenu && (
          <FloatMenu
            onMouseLeave={() => setFloatMenu(false)}
          >
            <ul className='float-menu'>
              <li><Link to='/clientes/cadastro'>Clientes</Link></li>
              <li><Link to='/instrutores/cadastro'>Instrutores</Link></li>
              <li><Link to='/usuarios/cadastro'>Usuários</Link></li>
              <li><Link to='/planos/cadastro'>Planos</Link></li>
            </ul>
          </FloatMenu>
        )
      }
    </HeaderContainer>
  )
}

export default Navbar