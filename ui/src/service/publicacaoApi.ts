import { URL_DEPLOY_OR_HOST } from '../utils/URL_DEPLOY_OR_HOST';

/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = `${URL_DEPLOY_OR_HOST}/publicacao`;
const URL2 = `${URL_DEPLOY_OR_HOST}/lembretes`;
const URL3 = `${URL_DEPLOY_OR_HOST}/eventos`;

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