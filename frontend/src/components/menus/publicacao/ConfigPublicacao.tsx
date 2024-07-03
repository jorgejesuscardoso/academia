/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { BtnContainer, Container, Edit, MenuPublicacao } from './style';
import Swal from 'sweetalert2';
import { atualizarPublicacao, deletarPublicacao } from '../../../service/publicacaoApi';

type ConfigPublicacaoProps = {
  setConfigPub: (config: boolean) => void;
  handleGetFeed: () => void;
  configPub: boolean;
  item: any;
};

const ConfigPublicacao = ({ setConfigPub, configPub, item, handleGetFeed }: ConfigPublicacaoProps) => {
  const [edit, setEdit] = useState(false);
  const [deletePub, setDeletePub] = useState(false);
  const [titles, setTitles] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setTitles(item.titulo);
    setContent(item.conteudo);
  } , []);

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

  const handleDelete = async () => {
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
      console.log(response);
      return response;

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Erro ao excluir a publicação'
      });
    }
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