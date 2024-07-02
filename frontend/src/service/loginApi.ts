const URL = 'https://academia-production-d7d0.up.railway.app/login';

export async function LoginApi({ username, senha }: { username: string, senha: string }) {
  const data = { username, senha };
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Login failed');
  }
}