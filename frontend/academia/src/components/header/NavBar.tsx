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
          <Link to='/home'>
            <li
              onMouseOver={() => setFloatMenu(false)}
              className={params === 'home' ? 'active' : ''}
            >
              Home
            </li>
          </Link>

          <Link to='/planos'>
            <li
              onMouseOver={() => setFloatMenu(false)}
              className={params === 'planos' ? 'active' : ''}
            >
              Planos
            </li>
          </Link>

          <Link to='/clientes'>
            <li
              onMouseOver={() => setFloatMenu(false)}
              className={params === 'clientes' ? 'active' : ''}
            >
              Clientes
            </li>
          </Link>

          <Link to='/instrutores'>
            <li
              onMouseOver={() => setFloatMenu(false)}
              onClick={() => setFloatMenu(!floatMenu)}
              className={params === 'instrutores' ? 'active' : ''}
            >
              Instrutores
            </li>
          </Link>

          <Link to='/usuarios'>
            <li
              onMouseOver={() => setFloatMenu(false)}
              onClick={() => setFloatMenu(!floatMenu)}
              className={params === 'usuarios' ? 'active' : ''}
            >
              Usuários
            </li>
          </Link>

          <li
            className={paramsCadastro === 'cadastro' ? 'active' : ''}            
          >
            <span
              onMouseOver={() => setFloatMenu(true)}
              onClick={() => setFloatMenu(true)}          
            >
              Cadastro
            </span>
          </li>
          <Link to='/'>
            <li
              onMouseOver={() => setFloatMenu(false)}
              onClick={ () => RemoveLocalStorage('user') }
            >
              Logout
            </li>
          </Link>
        </ul>
      </Nav>
      {
        floatMenu && (
          <FloatMenu
            onMouseLeave={() => setFloatMenu(false)}
          >
            <ul className='float-menu'>
              <Link to='/clientes/cadastro'><li>Clientes</li></Link>
              <Link to='/instrutores/cadastro'><li>Instrutores</li></Link>
              <Link to='/usuarios/cadastro'><li>Usuários</li></Link>
              <Link to='/planos/cadastro'><li>Planos</li></Link>
            </ul>
          </FloatMenu>
        )
      }
    </HeaderContainer>
  )
}

export default Navbar