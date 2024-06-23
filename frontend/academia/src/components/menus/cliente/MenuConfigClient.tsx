import { useEffect, useRef, useState } from 'react';
import { EditMenuContaienr, MenuClienteContainer } from './styled';
import { GetClientes, UpdateCliente } from '../../../service/clienteApi';

type MenuConfigClientProps = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataInicio: string;
  plano: string;
  setToggleConfig: (toggle: boolean) => void;
}
const MenuConfigClient = ({
  id,
  setToggleConfig,
}: MenuConfigClientProps) => {

  const refer = useRef<HTMLDivElement>(null);
  const [editMenu, setEditMenu] = useState<boolean>(false);
  const [updateClient, setUpdateClient] = useState({
    id,
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    dataInicio: '',
    planoId: 1,
    vencimento: ''
  });

  const handleEditClient = () => {
    setEditMenu(true); 
  };
  const handleDeleteClient = () => {
    console.log('Excluir Cliente');
  };
  const handleDeactivateClient = () => {
    console.log('Desativar Cliente');
  };
  const handlePayment = () => {
    console.log('Fazer Pagamento');
  };
  const handleViewClientDetails = () => {
    console.log('Visualizar Detalhes do Cliente');
  };

  const handleSubmitUpdate = async () => {
    const update = await UpdateCliente(updateClient.id, updateClient);
    console.log(update);
    setToggleConfig(false);
    await GetClientes();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refer.current && !refer.current.contains(event.target as Node)) {
        setToggleConfig(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <MenuClienteContainer ref={ refer }>
      <h4>Configurações do Cliente</h4>
      <ul>
        <li>
          <button onClick={() => handleEditClient()}>
            Editar Cliente
          </button>
        </li>
        <li>
          <button onClick={() => handleDeleteClient()}>
            Excluir Cliente
          </button>
        </li>
        <li>
          <button onClick={() => handleDeactivateClient()}>
            Desativar Cliente
          </button>
        </li>
        <li>
          <button onClick={() => handlePayment()}>
            Fazer Pagamento
          </button>
        </li>
        <li>
          <button onClick={() => handleViewClientDetails()}>
            Visualizar Detalhes do Cliente
          </button>
        </li>
      </ul>

      {
        editMenu && (
          <EditMenuContaienr>
            <h4>Editar Cliente</h4>
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
              <label htmlFor="phone"></label>
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

              <label htmlFor="diasRestantes">Dias Restantes:</label>
              <input
                type="date"
                id='diasRestantes'
                placeholder="Dias Restantes"
                onChange={
                  (e) => {
                    setUpdateClient({ ...updateClient, vencimento: e.target.value });
                  }
                }
                value={ updateClient.vencimento }

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
    </MenuClienteContainer>
  );
};

export default MenuConfigClient;
