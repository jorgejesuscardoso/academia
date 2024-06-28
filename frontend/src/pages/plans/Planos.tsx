import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { ListaDePlanos } from '../../components/tables/list-Plano/ListaDePlanos';

const Planos = () => {
  return (
    <div>
      <div>
        <AsideLeft classname={'asideLeft'} />
      </div>
      
      <ListaDePlanos />

      <div className='asideRight'>
        <AsideRight classname={'asideRight'}/>
      </div>
    </div>
  )
};

export default Planos;