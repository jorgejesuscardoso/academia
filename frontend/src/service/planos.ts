/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'http://localhost:3030/planos';

export const CreatePlano = async (data: any) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;

  } catch (error) {
    console.error(error);
  }
}

export const GetPlanos = async () => {
  try {

    const response = await fetch(URL);
    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error);
  }
}

export const GetPlanosById = async (id: number) => {
  try {

    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error);
  }
}

export const UpdatePlano = async (id: number, data: any) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;

  } catch (error) {
    console.error(error);
  }
}

export const DeletePlano = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    const responseData = await response.json();
    return responseData;

  } catch (error) {
    console.error(error);
  }
}