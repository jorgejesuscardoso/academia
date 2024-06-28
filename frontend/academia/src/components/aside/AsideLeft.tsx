import { AsideLeftContainersL } from '../../pages/home/style';
import { AsideLeftContent, VerMais } from './style';

const AsideLeft = () => {
  return (
    <AsideLeftContainersL className="asid">
      <AsideLeftContent className="asid__container">
        <div>
          <div>
            <h3>Exercícios</h3>
            <div>
              <h4>Peito</h4>
              <ul>
                <li>Supino reto</li>
                <li>Supino inclinado</li>
                <li>Supino declinado</li>
                <li>Crucifixo</li>
                <li className='verMais'>ver mais</li>
              </ul>
              <h4>Costas</h4>
              <ul>
                <li>Puxada frontal</li>
                <li>Puxada atrás</li>
                <li>Remada baixa</li>
                <li>Remada alta</li>
                <li className='verMais'>ver mais</li>
              </ul>
              <h4>Ombro</h4>
              <ul>
                <li>Desenvolvimento</li>
                <li>Elevação lateral</li>
                <li>Elevação frontal</li>
                <li>Elevação posterior</li>
                <li className='verMais'>ver mais</li>
              </ul>
              <VerMais href="#" className="btn">
                Ver todos
              </VerMais>
            </div>
          </div>
        </div>
        <div>
          <h3>Video para treino</h3>
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