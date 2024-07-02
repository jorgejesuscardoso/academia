import Swal from 'sweetalert2';

const URL = 'https://academia-production-d7d0.up.railway.app/search';

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








