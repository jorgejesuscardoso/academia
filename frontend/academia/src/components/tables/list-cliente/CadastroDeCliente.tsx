import { useState } from 'react';
import { DivButton, DivMsg, FormCadastro, MainCadastroClientes } from './style';
import { CreateCliente } from '../../../service/clienteApi';

const FormCadastroDeClientes = () => {
  const [msgSubmit, setMsgSubmit] = useState(false);
  const [data, setData] = useState({
    nome: '',
    email: '',
    telefone: '',
    planoId: 1,
    dataNascimento: '',
    dataInicio: '',
    vencimento: '',
    status: ''
  });

  const handleSubmit = async () => {
    try {
      const response = await CreateCliente(data);
      setMsgSubmit(!msgSubmit);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MainCadastroClientes>
      <FormCadastro
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        >
          
        <h1>Cadastrar novo cliente</h1>

        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={data.nome}
            onChange={(e) => setData({ ...data, nome: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={data.telefone}
            onChange={(e) => setData({ ...data, telefone: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="planoId">Plano:</label>
          <select
            id="planoId"
            value={data.planoId}
            onChange={(e) => setData({ ...data, planoId: Number(e.target.value) })}
          >
            <option value="1">Mensal</option>
            <option value="2">Trimestral</option>
            <option value="3">Semestral</option>
            <option value="4">Anual</option>
            <option value="5">Bianual</option>
            <option value="6">Vitalício</option>
          </select>
        </div>

        <div>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={data.dataNascimento}
            onChange={(e) => setData({ ...data, dataNascimento: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="dataInicio">Data de Início:</label>
          <input
            type="date"
            id="dataInicio"
            value={data.dataInicio}
            onChange={(e) => setData({ ...data, dataInicio: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="vencimento">Vencimento:</label>
          <input
            type="date"
            id="vencimento"
            value={data.vencimento}
            onChange={(e) => setData({ ...data, vencimento: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={data.status}
            onChange={(e) => setData({ ...data, status: e.target.value })}
          >
            <option value="Ativo">Ativo</option>
            <option value="Desativo">Desativo</option>
          </select>
        </div>
      <DivButton>
        <button type="submit">Cadastrar</button>
        <button type="reset">Limpar</button>
      </DivButton>
    </FormCadastro>

    {msgSubmit && (
      <DivMsg>
        <span
          onClick={() => setMsgSubmit(!msgSubmit)}
        >
          ❌
        </span>
        <p>Cliente cadastrado com sucesso!</p>
      </DivMsg>
    )}

  </MainCadastroClientes>
  );
};

export default FormCadastroDeClientes;