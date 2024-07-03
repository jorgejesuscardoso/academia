/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BtnContainer, Container, Edit, MenuPublicacao } from './style';
import Swal from 'sweetalert2';
import { atualizarPublicacao, deletarPublicacao } from '../../../service/publicacaoApi';
import { deleteLembrete } from '../../../service/lembrete';
import { deleteEvento } from '../../../service/eventoApi';

type ConfigPublicacaoProps = {
  setConfigPub: (config: boolean) => void;
  handleGetFeed: () => void;
  configPub: boolean;
  item: any;
  id: number;
};

const ConfigPublicacao = ({ setConfigPub, configPub, item, handleGetFeed, id }: ConfigPublicacaoProps) => {
  const [edit, setEdit] = useState(false);
  const [deletePub, setDeletePub] = useState(false);
  const [titles, setTitles] = useState('');
  const [content, setContent] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    setTitles(item.titulo);
    setContent(item.conteudo);
    setTipo(item.tipo)
  } , [id, item.titulo, item.conteudo, item.tipo]);

  const handleUpdate = async () => {
    try {
      const data = {
        id: item.id,
        titulo: titles,
        conteudo: content,
      };
      
      const response = await atualizarPublicacao(data);
      if (response) {      
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Publicação atualizada com sucesso'
        });
        handleGetFeed();
        setConfigPub(!configPub);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao atualizar a publicação'
        });
      }

      return response;

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro ao atualizar a publicação'
      });
    }
  };

  const handleDeletePublicacao = async () => {
    try {
      const response = await deletarPublicacao(item.id);

      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Publicação excluída com sucesso'
        });
        handleGetFeed();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Erro ao excluir a publicação'
        });
      }
      return response;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro ao excluir a publicação'
      });
    }
  };

  const handleDeleteLembrete = async () => {
    await deleteLembrete(id);
    
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Lembrete excluído com sucesso. Atualize a página para ver as mudanças.'
    });

    handleGetFeed();

    return;
  };

  const handleDeleteEvento = async () => {
    await deleteEvento(id);

    handleGetFeed(); 

    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Evento excluído com sucesso, atualize a página para ver as mudanças.'
    });        
  };

  const handleDelete = async () => {
    if (tipo === 'publicação') {
      handleDeletePublicacao();
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Publicação excluída com sucesso'
      });
      return;
    } else if (tipo === 'lembrete') {
      handleDeleteLembrete();
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Lembrete excluído com sucesso'
      });
      return;
    } else if (tipo === 'evento') {
      handleDeleteEvento();
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Evento excluído com sucesso'
      });
      return;
    }
    Swal.fire({
      icon: 'error',
      title: 'Erro ao excluir a publicação',
      text: 'Se acha que isso não deveria acontecer, tenta novamente.'
    });
  };

  return (
    <Container>
      <MenuPublicacao>
        <span
          onClick={() => setConfigPub(!configPub)}
        >
          ❌
        </span>
        <h4>Configuração da publicação</h4>
          <button
            onClick={() => setEdit(!edit)}
          >
            Editar
          </button>
          <button
            onClick={() => setDeletePub(!deletePub)}
          >
            Excluir
          </button>
      </MenuPublicacao>

      {
        edit && (
          <Edit>
            <span
              onClick={() => setEdit(!edit)}
            >
              ❌
            </span>
            <div>
              <label htmlFor="das">Titulo:</label>
              <input
                type="text"
                id="das"
                value={titles}
                placeholder={item.titulo}
                onChange={(e) => {
                  setTitles(e.target.value);
                  }
                }
              />
            </div>

            <div>
              <label htmlFor="das">Conteúdo:</label>
              <textarea
                id="das"
                value={content}
                placeholder={item.conteudo}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>

            <BtnContainer>
              <button
                onClick={() => {
                  setEdit(!edit);
                  handleUpdate();
                }}
              >
                Salvar
              </button>
              <button
                onClick={() => setEdit(!edit)}
              >
                Cancelar
              </button>
            </BtnContainer>
          </Edit>
        )
      }

      {
        deletePub && (
          <Edit>
            <span
              onClick={() => setDeletePub(!deletePub)}
            >
              ❌
            </span>
            <h4>Tem certeza que deseja excluir esta publicação?</h4>
            <BtnContainer>
              <button
                onClick={() => {
                  handleDelete();
                  setDeletePub(!deletePub);
                  setConfigPub(!configPub);
                }}
              >
                Excluir
              </button>
              <button
                onClick={() => setDeletePub(!deletePub)}
              >
                Cancelar
              </button>
            </BtnContainer>
          </Edit>
        )
      }

    </Container>
  );
};

export default ConfigPublicacao;