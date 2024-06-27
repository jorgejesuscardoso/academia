import { useEffect, useRef, useState } from 'react';
import { Buttons, ConfirmDeleteContainer, Content, MenuClienteContainer, ShowDataCliente } from './styled';
import { DeleteCliente, GetClientesById, UpdateCliente } from '../../../service/clienteApi';
import { FormUpdate } from '../../foms/clients/FormUpdate';
import { GetPlanosById } from '../../../service/planos';

type MenuConfigClientProps = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataInicio: string;
  plano: string;
  planoId: number;
  setToggleConfig: (toggle: boolean) => void;
  handleGetList: () => void;
}

type Planos = {
  id: 0,
  nome: '',
  valor: 0,
  clientes: [],
}

const MenuConfigClient = ({
  id,
  planoId,
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
  const [pagamento, setPagamento] = useState<boolean>(false);
  const [cofirmarPagamento, setConfirmarPagamento] = useState<boolean>(false);
  const [plano, setPlano] = useState<Planos>();
  const [showDataClient, setShowDataClient] = useState<boolean>(false);
  const [getDataClient, setDataClient] = useState({
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    dataInicio: '',
    plano: 'Mensal',
    vencimento: '',
  });
  
  const handleGetDataClient = async () => {
    const response = await GetClientesById(id);
    const plan = await GetPlanosById(response.planoId);
    setDataClient({
      id: response.id,
      nome: response.nome,
      email: response.email,
      telefone: response.telefone,
      dataNascimento: response.dataNascimento,
      dataInicio: response.dataInicio,
      plano: plan.nome,
      vencimento: response.vencimento === null ? 'Nunca' : response.vencimento,
    });
  };

  const handleEditClient = () => {
    setEditMenu(true); 
  };

  const handleDeleteClient = async () => {
    await DeleteCliente(id);
    handleGetList();
  };

  const handleDesactivateClient = async () => {
    const response = await GetClientesById(id);
    const data = {
      nome: response.nome,
      email: response.email,
      telefone: response.telefone,
      dataInicio: response.dataInicio.split('/').reverse().join('-'),
      planoId: response.planoId,
      vencimento: response.vencimento.split('/').reverse().join('-'),
      dataNascimento: response.dataNascimento.split('/').reverse().join('-'),
      status: typeActiveOrDesactive === 'active' ? 'Ativo' : 'Desativado',
    };

    await UpdateCliente(id, data);
    handleGetList();
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

  const getPlano = async () => {    
    const response = await GetPlanosById(planoId);
    return setPlano(response);
  }

  return (
    <MenuClienteContainer ref={ refer }>
      <h4>Configurações do(a) Cliente: <p>ID: Nº{ id } - { nome }</p></h4>
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
          <button onClick={() => {
            setPagamento(!pagamento);
            getPlano();
          }}>
            Fazer Pagamento
          </button>
        </li>
        <li>
          <button onClick={() => {
            setShowDataClient(!showDataClient);
            handleGetDataClient();
          }}>
            Visualizar Detalhes do Cliente
          </button>
        </li>
      </ul>

      { editMenu &&
          <FormUpdate
            id={id}
            setEditMenu={setEditMenu}
            handleGetList={handleGetList}
          />
      }

      { confirmDelete &&
        <ConfirmDeleteContainer>
          <main className='pop-up'>
            <span
              onClick={() => setConfirmDelete(!confirmDelete)}
            >
              ❌
            </span>
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
                    handleDesactivateClient();
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

      {
        pagamento &&
        <ConfirmDeleteContainer>
          <main className='pop-up'>
            <span
              onClick={() => setPagamento(false)}
            >
              ❌
            </span>
            <Content>
              <p>Você está realizando o pagamento do plano <strong>{plano && plano.nome}</strong> para o(a) cliente <strong>{ nome }</strong>, no valor de <strong>R$ { plano && plano.valor.toLocaleString() }.00</strong></p>
              <p>Deseja confirmar o pagamento?</p>
              <Buttons>
                <button
                  onClick={() => {
                    handlePayment();
                  }}
                >
                  Sim
                </button>
                <button
                  onClick={() => {
                    setPagamento(false);
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
        cofirmarPagamento &&
        <ConfirmDeleteContainer>
          <main className='pop-up'>
            <span
              onClick={() => setConfirmarPagamento(false)}
            >
              ❌
            </span>
            <Content>
              <p>O pagamento realizado com sucesso</p>
              <Buttons>
                <button
                  onClick={() => {
                    setConfirmarPagamento(false);
                    setToggleConfig(false);
                  }}
                >
                  Ok
                </button>
              </Buttons>
            </Content>
          </main>
        </ConfirmDeleteContainer>
      }

      {
        showDataClient && (
          <ShowDataCliente>
            <main className='pop-up'>
              <span
                onClick={() => setShowDataClient(false)}
              >
                ❌
              </span>
                <div>
                  <p><strong>Nome:</strong> {getDataClient.nome}</p>
                  <p><strong>Data de Nascimento:</strong> {getDataClient.dataNascimento}</p>
                </div>
                <div>
                  <p><strong>Email:</strong> {getDataClient.email}</p>
                  <p><strong>Telefone:</strong> {getDataClient.telefone}</p>
                </div>
                <div>
                  <p><strong>Plano:</strong> { getDataClient.plano }</p>
                  <p><strong>Data de Início:</strong> {getDataClient.dataInicio}</p>
                </div>
                <div>
                  <p><strong>Vencimento:</strong> {getDataClient.vencimento}</p>
                </div>
                <Buttons>
                  <button
                    onClick={() => setShowDataClient(false)}
                  >
                    Ok
                  </button>
                </Buttons>
            </main>
          </ShowDataCliente>
        )
      }

    </MenuClienteContainer>
  );
};

export default MenuConfigClient;
