import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { ListCliente } from '../../components/tables/list-cliente/List-Cliente';

export const Client = () => {
  return (
    <div>
       <div>
        <AsideLeft classname={'asideLeft'} />
      </div>
      
      <ListCliente />

      <div className='asideRight'>
        <AsideRight classname={'asideRight'}/>
      </div>
    </div>
  );
};