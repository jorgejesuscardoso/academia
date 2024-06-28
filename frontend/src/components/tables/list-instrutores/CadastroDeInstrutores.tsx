import { useState } from 'react';
import { DivButton, FormCadastroDeInstrutores, MainCadastroDeInstrutores } from './style';
import { createInstrutor } from '../../../service/InstrutorApi';
import Swal from 'sweetalert2';

type ResponseData = {
  status: number;
}

const CadastroDeInstrutores = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    nome: '',
    telefone: '',
    email: '',
    turno: 'Manhã'
  });

  const handleSubmit = async () => {
    try {
      const response = await createInstrutor(data) as unknown as ResponseData;
      console.log(response);
      if (response.status === 200) {
        setSuccess(true);
        return;
      } else {
        setError(true);
        return
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar instrutor',
        text: 'Erro interno do servidor',
      });
    } finally {
      setData({
        nome: '',
        telefone: '',
        email: '',
        turno: 'Manhã'
      });
    }
  }
  return (
    <MainCadastroDeInstrutores>
      <FormCadastroDeInstrutores
        onSubmit={
          e => {
            e.preventDefault();
            handleSubmit();
          }
        }
      >
        <h2>Cadastrar novo Instrutor</h2>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            onChange={e => {
              setData({ ...data, nome: e.target.value });
              setError(false);
              setSuccess(false);
            }}
            value={data.nome}
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            onChange={e => {
              setData({ ...data, telefone: e.target.value });
              setError(false);
              setSuccess(false);
            }}
            value={data.telefone}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            onChange={e => {
              setData({ ...data, email: e.target.value });
              setError(false);
              setSuccess(false);
            }}
            value={data.email}
          />
        </div>
        <div>
          <select
            name="turno"
            onChange={e => {
              setData({ ...data, turno: e.target.value });
              setError(false);
              setSuccess(false);
            }}
            value={data.turno}
          >
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>
        <DivButton>
          <button>
            Cadastrar
          </button>
          <button>
            Cancelar
          </button>
        </DivButton>
      </FormCadastroDeInstrutores>
      {error && <p>Erro ao cadastrar instrutor</p>}
      {success && <p>Instrutor cadastrado com sucesso</p>}
    </MainCadastroDeInstrutores>
  );
}

export default CadastroDeInstrutores;