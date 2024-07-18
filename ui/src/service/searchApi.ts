import Swal from 'sweetalert2';
import { URL_DEPLOY_OR_HOST } from '../utils/URL_DEPLOY_OR_HOST';

const URL = `${URL_DEPLOY_OR_HOST}/search`

// example of search: url/planos?nome=Vitalício

export const searchApi = async (por: string, em: string, value: string) => {
  try {
    const response = await fetch(`${URL}/${por}?${em}=${value}`);
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro ao buscar',
      text: 'Erro ao buscar, tente novamente'
    });
  }
};

export const searchApiFeed = async (query: string, search: string) => {
  try {
    const response = await fetch(`${URL}/${query}?query=${search}`);
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro ao buscar',
      text: 'Erro ao buscar, tente novamente'
    });
  }
};








