import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FloatMenu, HeaderContainer, Nav, SearchForm } from './style';
import { useEffect, useState } from 'react';
import { RemoveLocalStorage } from '../../utils/localStorage';
import Swal from 'sweetalert2';


const Navbar = () => {
  const navigate = useNavigate();

  const params = useLocation().pathname.split('/')[1];
  const [floatMenu, setFloatMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const closeMenu = () => setFloatMenu(false);
    
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);


  const handleSearch = async () => {
    try {

      navigate('/series');

      Swal.fire({
        icon: 'info',
        title: 'Buscando...',
        timer: 1000,
      });
   
      setTimeout(() => {
        Swal.fire({
          icon: 'info',
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

  return (
    <HeaderContainer>
      <Nav>
        <div>
          <img src="Series.png" alt="Thumb Arquivo X" />
        </div>

        <SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >         

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

        <ul>
          <Link to="/home">
            <li className={params === 'home' ? 'active' : ''}>Home</li>
          </Link>

          <Link to="/series">
            <li className={params === 'series' ? 'active' : ''}>Series</li>
          </Link>

          <Link to="/categorias">
            <li className={params === 'categorias' ? 'active' : ''}>Categorias</li>
          </Link>

          <Link to="/filmes">
            <li className={params === 'filmes' ? 'active' : ''}>Filmes</li>
          </Link>

          <Link to="/doramas">
            <li className={params === 'doramas' ? 'active' : ''}>Doramas</li>
          </Link>

          <Link to="/animes">
            <li className={params === 'animes' ? 'active' : ''}>Animes</li>
          </Link>

          <Link to="/login">
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
