import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { ListaDePlanos } from '../../components/tables/list-Plano/ListaDePlanos';

const Planos = () => {
  return (
    <div>
      <div>
        <AsideLeft />
      </div>
      
      <ListaDePlanos />

      <div className='asideRight'>
        <AsideRight />
      </div>
    </div>
  )
};

export default Planos;