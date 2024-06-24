import { useEffect, useRef, useState } from 'react';
import { Buttons, ConfirmDeleteContainer, Content, MenuClienteContainer } from './styled';
import { DeleteCliente, UpdateCliente } from '../../../service/clienteApi';
import { FormUpdate } from '../../foms/clients/FormUpdate';

type MenuConfigClientProps = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataInicio: string;
  plano: string;
  setToggleConfig: (toggle: boolean) => void;
  handleGetList: () => void;
  activeDesactiveClient: () => void;
}


const MenuConfigClient = ({
  id,
  nome,
  setToggleConfig,
  handleGetList,
}: MenuConfigClientProps) => {

  const refer = useRef<HTMLDivElement>(null);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [editMenu, setEditMenu] = useState<boolean>(false);
  const [activeDesactive, setActiveDesactive] = useState<boolean>(false);
  const [confirmActiveOrDesactive, setConfirmActiveOrDesactive] = useState<boolean>(false);
  const [typeActiveOrDesactive, setTypeActiveOrDesactive] = useState<string>('');
  const [updateClient, setUpdateClient] = useState({
    id,
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    dataInicio: '',
    planoId: 1,
    vencimento: '',
  });

  const handleEditClient = () => {
    setEditMenu(true); 
  };
  const handleDeleteClient = async () => {
    await DeleteCliente(id);
    handleGetList();
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
    if (updateClient.planoId === 6) {
      const endData = {
        ...updateClient,
        vencimento: "3001-12-31",
      };
      const update = await UpdateCliente(updateClient.id, endData);
      setToggleConfig(false);
      handleGetList();
      setToggleConfig(false);
      return update;
    }

    const update = await UpdateCliente(updateClient.id, updateClient);
    setToggleConfig(false);
    handleGetList();
    setToggleConfig(false);
    return update;
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
      <span
        onClick={() => setToggleConfig(false)}
      >
        ❌
      </span>
      <ul>
        <li>
          <button onClick={() => handleEditClient()}>
            Editar Cliente
          </button>
        </li>
        <li>
          <button onClick={() => setConfirmDelete(!confirmDelete)}>
            Excluir Cliente
          </button>
        </li>
        <li>
          <button onClick={() => setActiveDesactive(!confirmActiveOrDesactive)}>
            Ativar / Desativar
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
      { editMenu &&
          <FormUpdate
            updateClient={updateClient}
            handleSubmitUpdate={handleSubmitUpdate}
            setUpdateClient={setUpdateClient}
            setEditMenu={setEditMenu}
          />
      }
      { confirmDelete &&
        <ConfirmDeleteContainer>
          <main className='pop-up'>
            <Content>
              <p>Deseja realmente excluir o(a) cliente, {nome}?</p>
              <Buttons>
                <button
                  onClick={() => {
                    handleDeleteClient();
                    setConfirmDelete(!confirmDelete);
                    setToggleConfig(false);
                  }}
                >
                  Sim
                </button>
                <button
                  onClick={() => {
                    setConfirmDelete(!confirmDelete);
                  }}
                >
                  Não
                </button>
              </Buttons>
            </Content>
          </main>
        </ConfirmDeleteContainer>
      }
      {
        activeDesactive &&
        <ConfirmDeleteContainer>
          <main className='pop-up'>
            <span
              onClick={() => setActiveDesactive(false)}
            >
              ❌
            </span>
            <Content>
              <p>Ativar ou desativar o(a) cliente, {nome}?</p>
              <Buttons>
                <button
                  onClick={() => {
                    setConfirmActiveOrDesactive(true);
                    setTypeActiveOrDesactive('active');
                  }}
                >
                  Ativar
                </button>
                <button
                  onClick={() => {
                    setConfirmActiveOrDesactive(true);
                    setTypeActiveOrDesactive('desactive');
                  }}
                >
                  Desativar
                </button>
              </Buttons>
            </Content>
          </main>
        </ConfirmDeleteContainer>
      }
      {
        confirmActiveOrDesactive &&
        <ConfirmDeleteContainer>
          <main className='pop-up'>
            <span
              onClick={() => setConfirmActiveOrDesactive(false)}
            >
              ❌
            </span>
            <Content>
              <p>Deseja realmente {typeActiveOrDesactive === 'active' ? 'ativar' : 'desativar' } o(a) cliente, {nome}?</p>
              <Buttons>
                <button
                  onClick={() => {
                    handleDeactivateClient();
                    setConfirmActiveOrDesactive(false);
                    setToggleConfig(false);
                  }}
                >
                  Sim
                </button>
                <button
                  onClick={() => {
                    setConfirmActiveOrDesactive(false);
                  }}
                >
                  Não
                </button>
              </Buttons>
            </Content>
          </main>
        </ConfirmDeleteContainer>
      }
    </MenuClienteContainer>
  );
};

export default MenuConfigClient;
