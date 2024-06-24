import { EditMenuContaienr } from './style';

type ClietObject = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  dataInicio: string;
  planoId: number;
  vencimento: string;
};

type FormUpdateProps = {
    updateClient: ClietObject
    setUpdateClient: (updateClient: ClietObject) => void;
    handleSubmitUpdate: () => void;
    setEditMenu: (toggle: boolean) => void;
}

export const FormUpdate = ({
  updateClient,
  setUpdateClient,
  handleSubmitUpdate,
  setEditMenu
}: FormUpdateProps
) => {
  
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
          placeholder="Nome"
          value={ updateClient.nome }
          onChange={
            (e) => {
              setUpdateClient({ ...updateClient, nome: e.target.value });
            }
          }
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id='email'
          placeholder="Email"
          value={ updateClient.email }
          onChange={
            (e) => {
              setUpdateClient({ ...updateClient, email: e.target.value });
            }
          }
        />
        <label htmlFor="phone">Senha:</label>
        <input
          type="text"
          id='phone'
          placeholder="Telefone"
          value={ updateClient.telefone }
          onChange={
            (e) => {
              setUpdateClient({ ...updateClient, telefone: e.target.value });
            }
          }
        />

        <label htmlFor="nascimento">Data de Nascimento:</label>
        <input
          type="date"
          id='nascimento'
          onChange={(e) => {
            setUpdateClient({ ...updateClient, dataNascimento: e.target.value });
          }}
          value={ 
            updateClient.dataNascimento
          }
        />

        <label htmlFor="inicio">Data de Início:</label>
        <input
          type="date"
          id='inicio'
          placeholder="Data de Início"
          onChange={(e) => {
            setUpdateClient({ ...updateClient, dataInicio: e.target.value });
          }}
          value={ updateClient.dataInicio }
        />

        <label htmlFor="plano">Plano:</label>
        <select 
          name="plano"
          id="plano"
          onChange={(e) => {
            setUpdateClient({ ...updateClient, planoId: parseInt(e.target.value) });
          }}
          value={ updateClient.planoId }
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
          setUpdateClient({ ...updateClient, vencimento: e.target.value });
          }}
          value={
          updateClient.planoId === 6 
            ? new Date(3001, 11, 31).toISOString().split('T')[0]
            : updateClient.vencimento
          }
          />

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