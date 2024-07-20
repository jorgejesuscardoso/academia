import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { NotFoundMain } from './styled';

const NotFound = () => {
  return (
    <NotFoundMain>
      <h1>404 Not Found</h1>
      <AsideLeft />
      <AsideRight />
    </NotFoundMain>
  );
}

export default NotFound;