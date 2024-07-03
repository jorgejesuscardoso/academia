/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'http://localhost:3030/eventos';

export const getEventos = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const getEventoById = async (id: number) => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

export const createEvento = async (evento: any) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: evento,
  });
  return response.json();
};

export const updateEvento = async (evento: any) => {
  const response = await fetch(`${URL}/${evento.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  });
  return response.json();
};

export const deleteEvento = async (id: number) => {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
