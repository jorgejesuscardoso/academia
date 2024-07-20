import { Link } from 'react-router-dom';
import { AsideLeftContainersL, AsideLeftContent, AsideLeftWithBorder } from './style';

const AsideLeft = () => {
  const params = window.location.pathname.split('/')[1];
  const classname = params !== 'home' ? 'asideLeft' : '';
  return (
    <AsideLeftContainersL className={ classname }>
      <AsideLeftContent className="asid__container">
        <div>
          <div>
            <h3>Usuário</h3>
            <AsideLeftWithBorder>
              <ul>
                <Link to='/perfil'>
                  <li>
                    <img src="ico_profile_1.png" alt="About" />                  
                    Perfil.
                  </li>
                </Link>
                <Link to='/faq'>
                  <li>
                    <img src="ico_about_black.png" alt="About" />                  
                    Perguntas frequentes.
                  </li>
                </Link>
                <Link to='/config'>
                  <li>
                    <img src="config_black.png" alt="About" />                  
                    Configurações.
                  </li>
                </Link>
                <Link to='/cards'>
                  <li>
                    <img src="ico_contact_black.png" alt="About" />                  
                    Cartões de acesso.
                  </li>
                </Link>
                <Link to='/user_menu'><li className='verMais'>ver mais</li></Link>
              </ul>
              <h3>Geral</h3>
              <ul>
                <Link to='/shop'>
                  <li>
                    <img src="pngwing.com.png" alt="About" />                  
                    Shopping XYZ.
                  </li>
                </Link>
                <Link to='/update'>
                  <li>
                    <img src="ico_suport.png" alt="About" />                  
                    Suporte DevLab.
                  </li>
                </Link>
                <Link to='/address'>
                  <li>
                    <img src="ico_home_black.png" alt="About" />                  
                    Endereços XYZ.
                  </li>
                </Link>
                <Link to='/statistic'>
                  <li>
                    <img src="ico_project_black.png" alt="About" />                  
                    Estátisticas.
                  </li>
                </Link>
                <Link to='/general_menu'><li className='verMais'>ver mais</li></Link>
              </ul>
            </AsideLeftWithBorder>
          </div>
        </div>
        <div>
          <h3 className='video'><Link to='/videos'>Últimos vídeos</Link></h3>
          <iframe
            src="https://www.youtube.com/embed/VJSJiMFcVQ8?si=__rwlQqL3HR5mRKQ"
            allowFullScreen
            title="Youtube video player"
            width="100%"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        </div>
      </AsideLeftContent>
    </AsideLeftContainersL>
  );
}

export default AsideLeft;