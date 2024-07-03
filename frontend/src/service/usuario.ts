/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'https://academia-production-d7d0.up.railway.app/users';
//const URL = 'http://localhost:3030/planos';

export const createUser = async (user: any) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    console.log(user);
    return response;
  } catch (error) {
    console.error('Error creating user', error);
  }
}

export const getUsers = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users', error);
  }
}

export const getUsersById = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user', error);
  }
}

export const updateUser = async (user: any) => {
  try {
    const response = await fetch(`${URL}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return response;
  } catch (error) {
    console.error('Error updating user', error);
  }
}

export const deleteUser = async (id: number) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    });
    return response;
  } catch (error) {
    console.error('Error deleting user', error);
  }
}