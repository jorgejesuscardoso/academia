/* eslint-disable @typescript-eslint/no-explicit-any */

const URL = 'http://localhost:3030/instrutor';

export const createInstrutor = async (instrutor: any) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instrutor)
    });
    return response;
  } catch (error) {
    console.error('Error creating instrutor', error);
  }
}

export const getInstrutores = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching instrutores', error);
  }
}

export const getInstrutoresById = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching instrutor', error);
  }
}

export const updateInstrutor = async (instrutor: any) => {
  try {
    const response = await fetch(`${URL}/${instrutor.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instrutor)
    });
    return response;
  } catch (error) {
    console.error('Error updating instrutor', error);
  }
}

export const deleteInstrutor = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    });
    return response;
  } catch (error) {
    console.error('Error deleting instrutor', error);
  }
}