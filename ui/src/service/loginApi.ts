import { URL_DEPLOY_OR_HOST } from '../utils/URL_DEPLOY_OR_HOST';

const URL = `${URL_DEPLOY_OR_HOST}/login`

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