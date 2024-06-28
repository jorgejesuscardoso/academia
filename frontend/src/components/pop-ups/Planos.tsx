import { useState } from 'react';
import { GetLocalStorage } from '../../utils/localStorage';
import { getUsersById } from '../../service/usuario';
import Swal from 'sweetalert2';
import { ContainerConfirmModify, ContainerModify, ContainerRemove, DivUlPlanos, UlConfirmModify } from './style';

/* eslint-disable @typescript-eslint/no-explicit-any */
type PlanoParaRemover = {
  setRemove: (value: boolean) => void;
  setConfirmRemove: (value: boolean) => void;
  setDataPlanoToRemove: (value: any) => void;
  planos: any[];
};

type ConfirmarRemocao = {
  dataPlanoToRemove: any;
  setConfirmRemove: (value: boolean) => void;
  setConfirmRemoveAgain: (value: boolean) => void;
};

type ConfirmarRemocaoNovamente = {
  dataPlanoToRemove: any;
  setConfirmRemove: (value: boolean) => void;
  setConfirmRemoveAgain: (value: boolean) => void;
  setRemove: (value: boolean) => void;
  handleRemove: (id: number) => void;
};

// COMPONETES DE POP-UP PARA REMOVER PLANOS

export const EscolherPlanoParaRemover = ({
  setConfirmRemove,
  setDataPlanoToRemove,
  setRemove,
  planos
}: PlanoParaRemover) => {
  return (
    <ContainerRemove>
      <span
        onClick={() => setRemove(false)}
      >
        ❌
      </span>
      <h3>Escolha um plano para Remover</h3>
      <ul>
        {planos.map((plano) => (
          <button
              onClick={() => {
                setConfirmRemove(true);
                setDataPlanoToRemove(plano);
              }}
          >
            <li key={plano.id}>
            {plano.nome}            
            </li>
          </button>
        ))}
      </ul>
    </ContainerRemove>
  )
};

export const ConfirmarRemocao = ({
  dataPlanoToRemove,
  setConfirmRemove,
  setConfirmRemoveAgain
}: ConfirmarRemocao) => {
  return (
    <ContainerRemove>
      <span
        onClick={() => setConfirmRemove(false)}
      >
        ❌
      </span>
      <h3>Confirme a remoção</h3>
      {dataPlanoToRemove && (
        <>
          <p>
            Tem certeza que deseja remover o plano <strong>{dataPlanoToRemove.nome}</strong>?
          </p>
          <ul>
            <button onClick={() => setConfirmRemove(false)}>Cancelar</button>
            <button onClick={() => setConfirmRemoveAgain(true)}>Confirmar</button>
          </ul>
        </>
      )}
    </ContainerRemove>
  )
};

export const ConfirmarRemocaoNovamente = ({
  dataPlanoToRemove,
  setConfirmRemove,
  setConfirmRemoveAgain,
  setRemove,
  handleRemove
}: ConfirmarRemocaoNovamente) => {
  const [entreComSenha, setEntreComSenha] = useState(false);
  const [senha, setSenha] = useState('');

  const handleRemoveWithPassword = async () => {
    try {
      const userLocalStorage = GetLocalStorage('user');
      const dataUser = await getUsersById(userLocalStorage.id);
      const valid = senha === dataUser.senha;
      if (valid) {
        handleRemove(dataPlanoToRemove.id);
        setEntreComSenha(false);
        setConfirmRemoveAgain(false);
        setConfirmRemove(false);
        setRemove(false);
        Swal.fire({
          title: "Concluido!",
          text: "O plano foi removido com sucesso.",
          icon: "success"
        })
      } else {
        Swal.fire({
          title: "Acesso negado!",
          text: "Você não tem permissão para realizar esta ação.",
          icon: "error"
        })
      }
      return
    } catch (error) {
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao remover o plano.",
        icon: "error"
      })
    }
  };

  return (
    <ContainerRemove>
      <h3>Atenção</h3>
      {dataPlanoToRemove && (
        <>
          <p>Esta ação é irreversível e removerá todos os clientes </p>
          <p>associados ao plano.</p>
          <p>
            Tem certeza que deseja remover o plano <strong>{dataPlanoToRemove.nome}</strong>?
          </p>
          <ul>
            <button
              onClick={ () => setEntreComSenha(true) }
            >
              Confirmar
            </button>
            <button
              onClick={() => {
                setConfirmRemoveAgain(false);
                setConfirmRemove(false);
                setRemove(false);
              }}
            >
              Cancelar
            </button>
          </ul>
        </>
      )}

      {entreComSenha && (
        <ContainerRemove>
          <h3>Entre com a senha</h3>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <ul>
            <button onClick={handleRemoveWithPassword}>Confirmar</button>
            <button onClick={() => setEntreComSenha(false)}>Cancelar</button>
          </ul>
        </ContainerRemove>
      )}

    </ContainerRemove>
  )
};



// COMPONETES DE POP-UP PARA MODIFICAR PLANOS

type PlanoParaModificar = { 
  setShowPlanosToModify: (value: boolean) => void;
  setShowModify: (value: boolean) => void;
  setDataPlanoToModify: (value: any) => void;
  planos: any[];
};

type FormularioModificarPlano = {
  dataPlanoToModify: any;
  planModified: any;
  setPlanModified: (value: any) => void;
  setConfirmModify: (value: boolean) => void;
  setShowModify: (value: boolean) => void;
};

type ConfirmarModificacao = {
  dataPlanoToModify: any;
  planModified: any;
  setConfirmModify: (value: boolean) => void;
  setShowModify: (value: boolean) => void;
  handleModify: () => void;
};

export const EscolherPlanoParaModificar = ({
  setShowModify,
  setDataPlanoToModify,
  setShowPlanosToModify,
  planos
}: PlanoParaModificar) => {
  return (
    <ContainerModify>
      <span
        onClick={() => setShowPlanosToModify(false)}
      >
        ❌
      </span>
      <h3>Escolha um plano para modificar</h3>
      <UlConfirmModify>
        {planos.map((plano) => (
          <button
              onClick={() => {
                setShowModify(true);
                setDataPlanoToModify(plano);
              }}
              key={plano.id}
            >
            <li key={plano.id}>
              {plano.nome}
            </li>
          </button>
        ))}
      </UlConfirmModify>
    </ContainerModify>
  )
};

export const FormularioModificarPlano = ({
  dataPlanoToModify,
  planModified,
  setPlanModified,
  setConfirmModify,
  setShowModify
}: FormularioModificarPlano) => {
  return (
    <ContainerModify>
      <span
        onClick={() => setShowModify(false)}
      >
        ❌
      </span>
      <h3>Você está modificando o plano: </h3>
      <h3>{dataPlanoToModify.nome} ID: {dataPlanoToModify.id}</h3>
      <div>
        <label id="nome">Nome:</label>
        <input
          type="text"
          value={planModified.nome}
          onChange={(e) => setPlanModified({ ...planModified, nome: e.target.value })}
        />
      </div>
      <div>
        <label id="valor">Valor:</label>
        <input
          type="text"
          value={planModified.valor}
          onChange={(e) => setPlanModified({ ...planModified, valor: Number(e.target.value) })}
        />
      </div>
      <div>
        <label id="descricao">Descrição:</label>
        <textarea
          value={planModified.descricao}
          onChange={(e) => setPlanModified({ ...planModified, descricao: e.target.value })}
        />
      </div>

      <UlConfirmModify>
        <button onClick={() => setConfirmModify(true)}>Confirmar</button>
        <button onClick={() => setShowModify(false)}>Cancelar</button>
      </UlConfirmModify>
    </ContainerModify>
  )
};

export const ConfirmarModificacao = ({
  dataPlanoToModify,
  planModified,
  setConfirmModify,
  setShowModify,
  handleModify
}: ConfirmarModificacao) => {
  return (
    <ContainerConfirmModify>
      <span
        onClick={() => setConfirmModify(false)}
      >
        ❌
      </span>
      <h3>Modificar Plano</h3>
      <p>
        Tem certeza que deseja modificar o plano <strong>{dataPlanoToModify.nome}</strong>?
      </p>
      <p>Confira os dados abaixo antes de confirmar.</p>

      <h3>Dados antes da alteração.</h3>
      <DivUlPlanos>
        <table>
          <tr>
            <th>Nome</th>
            <th className='wt'>Valor</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>{dataPlanoToModify.nome}</td>
            <td>R$ {dataPlanoToModify.valor.toLocaleString()},00</td>
            <td>{dataPlanoToModify.descricao}</td>
          </tr>
        </table>
      </DivUlPlanos>

      <h3>Dados após a alteração.</h3>
      <DivUlPlanos>
        <table>
          <tr>
            <th>Nome</th>
            <th className='wt'>Valor</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>{planModified.nome}</td>
            <td>R$ {planModified.valor.toLocaleString()},00</td>
            <td>{planModified.descricao}</td>
          </tr>
        </table>
      </DivUlPlanos>

      <UlConfirmModify>
        <button onClick={() => setConfirmModify(false)}>Cancelar</button>
        <button
          onClick={() => {
            handleModify();
            setConfirmModify(false);
            setShowModify(false);
          }}
        >
          Confirmar
        </button>
      </UlConfirmModify>
    </ContainerConfirmModify>
  )
};