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
                <li>
                  <img src="ico_profile_1.png" alt="About" />                  
                  Perfil.
                </li>
                <li>
                  <img src="ico_about_black.png" alt="About" />                  
                  Perguntas frequentes.
                </li>
                <li>
                  <img src="config_black.png" alt="About" />                  
                  Configurações.
                </li>
                <li>
                  <img src="ico_contact_black.png" alt="About" />                  
                  Cartões de acesso.
                </li>
                <li className='verMais'>ver mais</li>
              </ul>
              <h3>Geral</h3>
              <ul>
                <li>
                  <img src="pngwing.com.png" alt="About" />                  
                  Shopping XYZ.
                </li>
                <li>
                  <img src="reset.png" alt="About" />                  
                  Atualizar dados.
                </li>
                <li>
                  <img src="ico_home_black.png" alt="About" />                  
                  Endereços XYZ.
                </li>
                <li>
                  <img src="ico_project_black.png" alt="About" />                  
                  Estátisticas.
                </li>
                <li className='verMais'>ver mais</li>
              </ul>
            </AsideLeftWithBorder>
          </div>
        </div>
        <div>
          <h3 className='video'><Link to=''>Últimos vídeos</Link></h3>
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