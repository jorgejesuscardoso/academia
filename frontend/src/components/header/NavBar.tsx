import { Link, useLocation } from 'react-router-dom';
import { FloatMenu, HeaderContainer, Nav, SearchContainer } from './style';
import { useEffect, useState } from 'react';
import { RemoveLocalStorage } from '../../utils/localStorage';
import Swal from 'sweetalert2';
import { searchApi } from '../../service/searchApi';
import { useDispatch } from 'react-redux';
import { searchAction, typeSearchAction } from '../../redux/actions/searchAction';


const Navbar = () => {
  const dispatch = useDispatch();

  const params = useLocation().pathname.split('/')[1];
  const paramsCadastro = useLocation().pathname.split('/')[2];
  const [floatMenu, setFloatMenu] = useState(false);
  const [tipoDeBusca, setTipoDeBusca] = useState('');
  const [ondeBuscar, setOndeBuscar] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const closeMenu = () => setFloatMenu(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);


  const handleSearch = async () => {
    try {
      const response = await searchApi(tipoDeBusca, ondeBuscar, searchValue);
      
      const payload = { onde: tipoDeBusca, oque: ondeBuscar, assunto: searchValue }
      
      console.log(payload)
      if (response.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Nada encontrado',
          text: 'Nenhum resultado encontrado'
        });
      }

      dispatch(searchAction(response));
      dispatch(typeSearchAction(payload));   

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao buscar',
        text: 'Erro ao buscar, tente novamente'
      });
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <div>
          <img src="academiaLogo2.png" alt="Logo da academia" />
        </div>

        <SearchContainer>
          <select
            name="buscar em"
            onChange={(e) => setTipoDeBusca(e.target.value)}
            value={tipoDeBusca}
          >
            <option value="Tipo de Busca" hidden>Buscar em</option>
            <option value="plano">Planos</option>
            <option value="cliente">Clientes</option>
            <option value="instrutor">Instrutores</option>
            <option value="user">Usuários</option>
          </select>

          <select
            name="buscar por"
            onChange={(e) => setOndeBuscar(e.target.value)}
            value={ondeBuscar}
          >
            <option value="O que Buscar" hidden>Buscar por</option>
            <option value="nome">Nome</option>
            <option
              value="email"
              hidden={ tipoDeBusca === 'planos' }
            >
              Email
            </option>
            <option
              value="telefone"
              hidden={ tipoDeBusca === 'planos' }
            >
              Telefone
            </option>
            <option value="id">ID</option>
          </select>

          <input
            type="search"
            placeholder="Faça uma busca..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
          >
            <img src="ico_search.png" alt="Ícone de busca" />
          </button>
        </SearchContainer>

        <ul>
          <Link to="/home">
            <li className={params === 'home' ? 'active' : ''}>Home</li>
          </Link>

          <Link to="/planos">
            <li className={params === 'planos' ? 'active' : ''}>Planos</li>
          </Link>

          <Link to="/clientes">
            <li className={params === 'clientes' ? 'active' : ''}>Clientes</li>
          </Link>

          <Link to="/instrutores">
            <li
              onClick={() => setFloatMenu(!floatMenu)}
              className={params === 'instrutores' ? 'active' : ''}
            >
              Instrutores
            </li>
          </Link>

          <Link to="/usuarios">
            <li
              onClick={() => setFloatMenu(!floatMenu)}
              className={params === 'usuarios' ? 'active' : ''}
            >
              Usuários
            </li>
          </Link>

          <li className={paramsCadastro === 'cadastro' ? 'active' : ''}>
            <span
              onMouseOver={() => setFloatMenu(true)}
              onClick={() => setFloatMenu(true)}
            >
              Cadastro
            </span>
          </li>
          <Link to="/">
            <li onClick={() => RemoveLocalStorage('user')}>Logout</li>
          </Link>
        </ul>
      </Nav>
      {floatMenu && (
        <FloatMenu onMouseLeave={() => setFloatMenu(false)}>
          <ul className="float-menu">
            <Link to="/clientes/cadastro"><li>Clientes</li></Link>
            <Link to="/instrutores/cadastro"><li>Instrutores</li></Link>
            <Link to="/usuarios/cadastro"><li>Usuários</li></Link>
            <Link to="/planos/cadastro"><li>Planos</li></Link>
          </ul>
        </FloatMenu>
      )}
    </HeaderContainer>
  );
};

export default Navbar;
