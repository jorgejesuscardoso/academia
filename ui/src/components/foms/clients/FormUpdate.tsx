import { useEffect, useState } from 'react';
import { EditMenuContaienr } from './style';
import { GetClientesById, UpdateCliente } from '../../../service/clienteApi';

type FormUpdateProps = {
  id: number;
  setEditMenu: (toggle: boolean) => void;
  handleGetList: () => void;
}

export const FormUpdate = ({ setEditMenu, id, handleGetList }: FormUpdateProps
) => {
  const [data, setData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    dataInicio: '',
    planoId: 0,
    vencimento: '',
    status: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetClientesById(id);
      setData(response);
    }
    fetchData();
  }, [id]);

  const handleSubmitUpdate = async () => {
    const fixedData = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      planoId: data.planoId,
      status: data.status,
      dataNascimento: data.dataNascimento.split('/').reverse().join('-'),
      dataInicio: data.dataInicio.split('/').reverse().join('-'),
      vencimento: data.vencimento.split('/').reverse().join('-'),
    };

    const response = await UpdateCliente(id, fixedData);

    setEditMenu(false);
    handleGetList();
    return response;
  }
  return (
    <EditMenuContaienr>
      <h4>Editar Cliente</h4>
      <span
        onClick={
          () => {
            setEditMenu(false);
          }
        }
      >
        ❌
      </span>
      <form
        onSubmit={
          (e) => {
            e.preventDefault();
            handleSubmitUpdate();
          }
        }
      >
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={ data.nome }
          onChange={
            (e) => {
              setData({ ...data, nome: e.target.value });
            }
          }
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id='email'
          value={ data.email }
          onChange={
            (e) => {
              setData({ ...data, email: e.target.value });
            }
          }
        />
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          id='phone'
          value={ data.telefone }
          onChange={
            (e) => {
              setData({ ...data, telefone: e.target.value });
            }
          }
        />

        <label htmlFor="nascimento">Data de Nascimento:</label>
        <input
          type="date"
          id='nascimento'
          onChange={(e) => {
            setData({ ...data, dataNascimento: e.target.value });
          }}
          value={ 
            data.dataNascimento.split('/').reverse().join('-')
          }
        />

        <label htmlFor="inicio">Data de Início:</label>
        <input
          type="date"
          id='inicio'
          onChange={(e) => {
            setData({ ...data, dataInicio: e.target.value });
          }}
          value={ data.dataInicio.split('/').reverse().join('-')
          }
        />

        <label htmlFor="plano">Plano:</label>
        <select 
          name="plano"
          id="plano"
          onChange={(e) => {
            setData({ ...data, planoId: parseInt(e.target.value) });
          }}
          value={ data.planoId }
        >
          <option value="1">Mensal</option>
          <option value="2">Trimestral</option>
          <option value="3">Semestral</option>
          <option value="4">Anual</option>
          <option value="5">Bianual</option>
          <option value="6">Vitalício</option>
        </select>

        <label htmlFor="diasRestantes">Vencimento:</label>
        <input
          type="date"
          id="diasRestantes"
          placeholder="Dias Restantes"
          onChange={(e) => {
          setData({ ...data, vencimento: e.target.value });
          }}
          value={
            data.vencimento.split('/').reverse().join('-')
          }
          />

          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={(e) => {
              setData({ ...data, status: e.target.value });
            }}
            value={ data.status }
          >
            <option value="Ativo">Ativo</option>
            <option value="Desativado">Desativado</option>
          </select>

        <div>
          <button 
            type="submit"
            className='success'
          >
              Salvar
          </button>
          <button
            type="button"
            onClick={() => setEditMenu(false)}
            className='error'
          >
            Cancelar
          </button>
        </div>
      </form>
    </EditMenuContaienr>
  )
}