const URL = 'http://localhost:3030/cliente';

export const GetClientes = async () => {
    try {
        const response = await fetch(URL);
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
