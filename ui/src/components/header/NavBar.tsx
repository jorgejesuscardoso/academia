import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FloatMenu, FloatMenuMobile, HeaderContainer, MenuMobile, Nav, NavMobile, SearchForm } from './style';
import { useEffect, useState } from 'react';
import { RemoveLocalStorage } from '../../utils/localStorage';
import Swal from 'sweetalert2';
import { searchApi, searchApiFeed } from '../../service/searchApi';
import { searchAction, typeSearchAction } from '../../redux/actions/searchAction';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMenu = useSelector((state: any) => state.NavMobile);

  const params = useLocation().pathname.split('/')[1];
  const paramsCadastro = useLocation().pathname.split('/')[2];

  const [floatMenu, setFloatMenu] = useState(false);
  const [tipoDeBusca, setTipoDeBusca] = useState('');
  const [ondeBuscar, setOndeBuscar] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [getWindowSize] = useState(window.innerWidth);
  const [floatMenuNav, setFloatMenuNav] = useState(toggleMenu);

  const handleSearch = async () => {
    try {
      if (tipoDeBusca === '' ) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao buscar',
          text: 'Escolha ao menos uma opção de busca'
        });
        return
      }
      navigate('/home');
      if (tipoDeBusca === 'publicacao' || tipoDeBusca === 'evento' || tipoDeBusca === 'lembrete') {

        const response = await searchApiFeed(tipoDeBusca,searchValue);
        
        if (response === 'error') {
          Swal.fire({
            icon: 'error',
            title: 'Erro ao buscar',
            text: 'Erro ao buscar, tente novamente'
          });
          return
        } else {
          setTimeout(() => {
            dispatch(searchAction(response));
            dispatch(typeSearchAction({ onde: tipoDeBusca, assunto: searchValue}));
            Swal.fire({
              icon: 'info',
              title: 'Concluído',
              timer: 1000,
            });
          }, 1000);
          return
        }        
      }

      const response = await searchApi(tipoDeBusca, ondeBuscar, searchValue);
      
      const payload = { onde: tipoDeBusca, oque: ondeBuscar, assunto: searchValue }
      
      if (response === 'error') {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao buscar',
          text: 'Erro ao buscar, tente novamente'
        });
        return
      }
      
      if (response.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Nada encontrado',
          text: 'Nenhum resultado encontrado',
          showConfirmButton: false,
          timer: 1500,
        });
        return
      }

      Swal.fire({
        icon: 'info',
        title: 'Buscando...',
        timer: 1000,
      });
   
      setTimeout(() => {
        dispatch(searchAction(response));
        dispatch(typeSearchAction(payload));
        Swal.fire({
          icon: 'success',
          title: 'Concluído',
          timer: 1000,
        });
      }, 1000);

      return 

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao buscar',
        text: 'Erro ao buscar, tente novamente'
      });
    }
  };

  const handlerefresh = () => {
    window.location.reload();
  }

  useEffect(() => {
    if (toggleMenu.type) {
      setFloatMenuNav(false);
      setFloatMenu(false);
    };
  }, [toggleMenu]);

  return (
    <HeaderContainer
    >
      {getWindowSize < 1023 && (
        <NavMobile>
          <img
            src="academiaLogo2.png"
            alt="Logo da academia"
            onClick={() => {
              navigate('/home');
              handlerefresh();
            }}
          />
          <SearchForm
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <select
              name="buscar em"
              onChange={(e) => setTipoDeBusca(e.target.value)}
              value={tipoDeBusca}
            >
              <option value="Tipo de Busca" hidden>Buscar</option>
              <option value="plano">Planos</option>
              <option value="cliente">Clientes</option>
              <option value="instrutor">Instrutores</option>
              <option value="user">Usuários</option>
              <option value="publicacao">Publicações</option>
              <option value="evento">Eventos</option>
              <option value="lembrete">Lembretes</option>
            </select>
            <select
              name="buscar por"
              onChange={(e) => setOndeBuscar(e.target.value)}
              value={ondeBuscar}
              disabled={tipoDeBusca === '' || tipoDeBusca === 'publicacao' || tipoDeBusca === 'evento' || tipoDeBusca === 'lembrete'}
            >
              <option value="O que Buscar" hidden>Por</option>
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
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}

            />
            <button>
              <img src="ico_search.png" alt="Ícone de busca" />
            </button>
          </SearchForm>
          <MenuMobile 
            onClick={() => setFloatMenuNav(!floatMenuNav)}
          >
            <img src="menu_white.png" alt="Menu Sandwiche" />        
          </MenuMobile>          
        </NavMobile>
      )}
      <Nav>
        <div>
          <img
              src="academiaLogo2.png"
              alt="Logo da academia"
              onClick={() => {
                navigate('/home');
                handlerefresh();
              }}
              id='logo'
            />
        </div>

        <SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
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
            <option value="publicacao">Publicações</option>
            <option value="evento">Eventos</option>
            <option value="lembrete">Lembretes</option>
          </select>

          <select
            name="buscar por"
            onChange={(e) => setOndeBuscar(e.target.value)}
            value={ondeBuscar}
            disabled={tipoDeBusca === '' || tipoDeBusca === 'publicacao' || tipoDeBusca === 'evento' || tipoDeBusca === 'lembrete'}
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
            type="submit"
          >
            <img src="ico_search.png" alt="Ícone de busca" />
          </button>
        </SearchForm>

          <Link to="/cart" className='cart'><img src="cart_white.png" alt="carrinho de compras" /></Link>
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

      {floatMenuNav && (
        <FloatMenuMobile
          onMouseLeave={() => setFloatMenuNav(false)}
        >
          <ul className="float-menu">
            <Link to="/shop"><li>Loja - XYZ</li></Link>
            <Link to="/cart"><li>Carrinho</li></Link>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/planos"><li>Planos</li></Link>
            <Link to="/clientes"><li>Clientes</li></Link>
            <Link to="/instrutores"><li>Instrutores</li></Link>
            <Link to="/usuarios"><li>Usuários</li></Link>
            <Link to="/clientes/cadastro"><li>Cadastrar Clientes</li></Link>
            <Link to="/instrutores/cadastro"><li>Cadastrar Instrutores</li></Link>
            <Link to="/usuarios/cadastro"><li>Cadastrar Usuários</li></Link>
            <Link to="/planos/cadastro"><li>Cadastrar Planos</li></Link>
            <Link to="/"><li onClick={() => RemoveLocalStorage('user')}>Logout</li></Link>
          </ul>
        </FloatMenuMobile>
      )}
    </HeaderContainer>
  );
};

export default Navbar;
