import { AsideRightContainers, AsideRightContent } from './style';

const AsideRight = () => {
  const params = window.location.pathname.split('/')[1];
  const classname = params !== 'home' ? 'asideRight' : '';
  return (
    <AsideRightContainers className={ classname }>
      <AsideRightContent className="asideright__container">
        <div className="asideright__container--content">
          <img 
            src="academiaLogo.png"
            alt="Logo marca"
            title="Logo marca"
          />
        </div>

        <div>
          <h3>Lembretes</h3>
          <div>
            <h4>Hoje</h4>
            <ul>
              <li>Reunião com a equipe</li>
              <li>Reunião com a equipe</li>
              <li>Reunião com a equipe</li>
            </ul>
            <h4>Próximos dias</h4>
            <ul>              
              <li>Reunião com a equipe</li>
              <li>Reunião com a equipe</li>
            </ul>
          </div>
          <div>
            <h3>Eventos</h3>
            <div>
              <h4>Hoje</h4>
              <ul>
                <li>Reunião com a equipe</li>
                <li>Reunião com a equipe</li>
                <li>Reunião com a equipe</li>
              </ul>
              <h4>Prôximos 3 dias</h4>
              <ul>
                <li>Reunião com a equipe</li>
                <li>Reunião com a equipe</li>
                <li>Reunião com a equipe</li>
              </ul>
            </div>
          </div>
        </div>
      </AsideRightContent>
    </AsideRightContainers>
  );
}

export default AsideRight;
