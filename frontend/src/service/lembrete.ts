/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'http://localhost:3030/lembretes';

export const getLembretes = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const getLembreteById = async (id: number) => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};

export const createLembrete = async (lembrete: any) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: lembrete,
  });
  return response.json();
};

export const updateLembrete = async (lembrete: any) => {
  const response = await fetch(`${URL}/${lembrete.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lembrete),
  });
  return response.json();
};

export const deleteLembrete = async (id: number) => {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}