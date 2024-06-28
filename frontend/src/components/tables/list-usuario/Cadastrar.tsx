/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { ContainerCadastroUsuario, DivButton, FormCadastroPlano } from './style';
import { createUser } from '../../../service/usuario';
import Swal from 'sweetalert2';

type CadastroUsuario = {
  username: string;
  nome: string;
  senha: string;
  telefone: string;
  email: string;
  turno: string;
  role: string;
}

const CadastrarUsuario = () => {

  const [data, setData] = useState<CadastroUsuario>({
    username: '',
    nome: '',
    senha: '',
    telefone: '',
    email: '',
    turno: 'Manhã',
    role: 'Visitante'
  });

  const handleSubmit = async () => {
    try {
      const response = await createUser(data) as any;

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado com sucesso',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao cadastrar usuário',
          text: response.data.message,
        });
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro interno do servidor',
        text: 'Erro do servidor',
      });
    }
  };

  return (
      <ContainerCadastroUsuario>
        <FormCadastroPlano
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h2>Cadastrar Usuário</h2>
          <div>
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="nome">Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={data.nome}
              onChange={(e) => setData({ ...data, nome: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={data.senha}
              onChange={(e) => setData({ ...data, senha: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={data.telefone}
              onChange={(e) => setData({ ...data, telefone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="turno">Turno:</label>
            <select
              id="turno"
              name="turno"
              value={data.turno}
              onChange={(e) => setData({ ...data, turno: e.target.value })}
            >
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
            </select>
          </div>
          <div>
            <label htmlFor="role">Função:</label>
            <select
              id="role"
              name="role"
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
            >
              <option value="" hidden disabled>Escolha uma opção</option>
              <option value="visitante">Visitante</option>
              <option value="admin">Admin</option>
              <option value="secretaria">Secretária</option>
              <option value="estagiario">Estagiário</option>
            </select>
          </div>
          <DivButton>
            <button type="submit">Cadastrar</button>
            <button type='reset'>Cancelar</button>
          </DivButton>
        </FormCadastroPlano>
      </ContainerCadastroUsuario>
  );
};

export default CadastrarUsuario;