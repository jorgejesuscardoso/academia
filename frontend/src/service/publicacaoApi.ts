/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'https://academia-production-d7d0.up.railway.app/publicacao';
const URL2 = 'https://academia-production-d7d0.up.railway.app/lembretes';
const URL3 = 'https://academia-production-d7d0.up.railway.app/eventos';
/* const URL = 'http://localhost:3030/publicacao';
const URL2 = 'http://localhost:3030/lembretes';
const URL3 = 'http://localhost:3030/eventos'; */

export const criarPublicacao = async (publicacao: FormData) => {

  const response = await fetch(URL, {
    method: 'POST',
    body: publicacao,
  });

  const data = await response.json();

  return data;
};


export const listarPublicacoes = async () => {
  const response = await fetch(URL);
  const response2 = await fetch(URL2);
  const response3 = await fetch(URL3);

  const data = await response.json();
  const data2 = await response2.json();
  const data3 = await response3.json();

  const newData = data.concat(data2).concat(data3);
  return newData;
};

export const listarPublicacaoPorId = async (id: number) => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  return data;
};

export const atualizarPublicacao = async (publicacao: any) => {
  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(publicacao),
  });

  const data = await response.json();

  return data;
};

export const deletarPublicacao = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      return true;
    } 

  } catch (error) {
    return false;
  }
};