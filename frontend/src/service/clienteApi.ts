/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'https://academia-production-d7d0.up.railway.app/cliente';

export const CreateCliente = async (data: any) => {
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

export const GetClientes = async () => {
	try {

		const response = await fetch(URL);
		const data = await response.json();

		return data;

	} catch (error) {
		console.error(error);
	}
}

export const GetClientesById = async (id: number) => {
	try {

		const response = await fetch(`${URL}/${id}`);
		const data = await response.json();

		return data;

	} catch (error) {
		console.error(error);
	}
}

export const UpdateCliente = async (id: number, data: any) => {
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

export const DeleteCliente = async (id: number) => {
	try {
		const response = await fetch(`${URL}/${id}`, {
			method: 'DELETE'
		});

		const responseData = await response.json();
		return responseData;

	} catch (error) {
		console.error(error);
	}
}
