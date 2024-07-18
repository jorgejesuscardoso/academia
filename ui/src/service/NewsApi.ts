import Swal from 'sweetalert2';

const URL = 'https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=da6d379bbf5b4cd79bf6b6ae6d7fb8bc';

export const NewsApi = async () => {
  try {
    const response = await fetch(URL);
    const data = response.json();
    return data;
  } catch {
    Swal.fire({
      icon: 'error',
      title: 'Error do servido!',
      text: 'Houve um erro enquanto buscava as noticias!'
    })
  }
}

