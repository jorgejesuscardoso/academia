import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { ListCliente } from '../../components/tables/list-cliente/List-Cliente';

export const Client = () => {
  return (
    <div>
       <div>
        <AsideLeft />
      </div>
      
      <ListCliente />

      <div className='asideRight'>
        <AsideRight />
      </div>
    </div>
  );
};