import Swal from 'sweetalert2';
import { URL_DEPLOY_OR_HOST } from '../utils/URL_DEPLOY_OR_HOST';

const URL = `${URL_DEPLOY_OR_HOST}/products`

export const getProducts = async (page: number, pageSize: number) => {
  try {

    const response = await fetch(`${URL}?page=${page}&pageSize=${pageSize}`);
    const data = await response.json();

    return data;
    
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro ao buscar produtos',
    });
  }
};