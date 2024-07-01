/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'http://localhost:3030/publicacao';

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
  const data = await response.json();

  return data;
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
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
};