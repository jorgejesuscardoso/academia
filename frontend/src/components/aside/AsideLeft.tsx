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
            <h3>Exercícios</h3>
            <AsideLeftWithBorder>
              <h4>Texto Test</h4>
              <ul>
                <li>
                  <img src="ico_about_black.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src="config_black.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src="ico_contact_black.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li className='verMais'>ver mais</li>
              </ul>
              <h4>Texto Test 2</h4>
              <ul>
                <li>
                  <img src="ico_search_black.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>

                <li>
                  <img src="pngwing.com.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src="reset.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li className='verMais'>ver mais</li>
              </ul>
              <h4>Texto test 3</h4>
              <ul>
                <li>
                  <img src="ico_home_black.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src="ico_profile_1.png" alt="About" />
                  Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <img src="ico_project_black.png" alt="About" />
                  Lorem ipsum dolor sit amet.
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