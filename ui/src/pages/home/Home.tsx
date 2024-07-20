/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from 'react-redux';
import { NewsCardContainer, CardLink, CardTitle, Container, HomeContent, Labels, SearchInfoSection, Value, SearchCardContainer, CardAuthor, CardPublishedAt, CardContent, TextArea, DivDataNewevent, CardContentImg, CardSpanContainer, CardContentAligned } from './style';
import CardSearch from '../../components/card/SearchCard';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { criarPublicacao, listarPublicacoes } from '../../service/publicacaoApi';
import { GetLocalStorage } from '../../utils/localStorage';
import ConfigPublicacao from '../../components/menus/publicacao/ConfigPublicacao';
import { createEvento } from '../../service/eventoApi';
import { createLembrete } from '../../service/lembrete';
import { URL_DEPLOY_OR_HOST } from '../../utils/URL_DEPLOY_OR_HOST';
import { toggleMobileMenu } from '../../redux/actions/searchAction';

const Home = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: any) => state.typeSearchRedux);
  const searchSelector = useSelector((state: any) => state.searchRedux as any[] );
  const [feed, setFeed] = useState<any>([]);
  const [ShowSearchItems, setShowSearchItens] = useState(false);
  const [count, setCount] = useState(0)
  const [newPublication, setNewPublication] = useState({
    titulo: '',
    conteudo: '',
    usuarioId: '',
    tipo: 'type',
  })
  
  const [image, setImage] = useState<any>(null);
  const [newData, setNewData] = useState({
    data: '',
  })
  const [configPubIndex, setConfigPubIndex] = useState<number | null>(null);

  const URL_IMAGE_PUBLICACAO = `${URL_DEPLOY_OR_HOST}/publicacaos/img`;
  const URL_IMAGE_LEMBRETE = `${URL_DEPLOY_OR_HOST}/lembretes/img`;
  const URL_IMAGE_EVENTOS = `${URL_DEPLOY_OR_HOST}/eventos/img`;
  
  useEffect(() => {
    if (searchQuery.onde === 'publicacao' || searchQuery.onde === 'evento' || searchQuery.onde === 'lembrete' || searchQuery.onde === '') {
      setShowSearchItens(false)
      searchSelector.sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt || a.publishedAt);
        const dateB = new Date(b.createdAt || b.publishedAt);        
        return Number(dateB.getTime()) - Number(dateA.getTime())

      })
      setFeed(searchSelector)
      return;
    }
    setShowSearchItens(true)
  }, [searchQuery, searchSelector])

  useEffect(() => {
    GetFeed()
    setShowSearchItens(false)
  },[])

  const GetFeed = async () => {
    try {

      const response = await listarPublicacoes();

      response.sort((a: any, b: any) => {
        const dateA = new Date(a.createdAt || a.publishedAt);
        const dateB = new Date(b.createdAt || b.publishedAt);        
        return Number(dateB.getTime()) - Number(dateA.getTime())

      });
      setFeed(response);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao buscar feed!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleNewPublication = async () => {
    const storedUser = GetLocalStorage('user');
    if (newPublication.tipo === 'type') {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Selecione um tipo de publicação!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (newPublication.tipo === 'publicação' && newPublication.conteudo === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Escreva algo antes de publicar!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } 

    const data = new FormData();
    data.append('titulo', newPublication.titulo);
    data.append('conteudo', newPublication.conteudo);
    data.append('usuarioId', storedUser.id);
    data.append('tipo', newPublication.tipo);
    data.append('imagem', image);

    try {

      Swal.fire({
        icon: 'info',
        title: 'Criando publicação...',
        didOpen: () => {
          Swal.showLoading()
        }
      });

      const newPub = await criarPublicacao(data);
      
      setNewPublication({
        tipo: 'type',
        titulo: '',
        conteudo: '',
        usuarioId: '',
      });

      setImage(null);

      GetFeed();

      Swal.fire({
        icon: 'success',
        title: 'Feito!',
        text: 'Publicação criada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });

      return newPub;

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao criar nova publicação!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleNewEvent = async () => {

    const storedUser = GetLocalStorage('user');
    if (newPublication.titulo === '' || newData.data === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Preencha todos os campos!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }


    const formData = new FormData();
    formData.append('titulo', newPublication.titulo);
    formData.append('data', newData.data);
    formData.append('conteudo', newPublication.conteudo);
    formData.append('usuarioId', storedUser.id);
    formData.append('tipo', newPublication.tipo);
    formData.append('imagem', image);

    try {
      Swal.fire({
        icon: 'info',
        title: 'Criando evento...',
        didOpen: () => {
          Swal.showLoading()
        }
      });
      
      await createEvento(formData);
      
      setNewPublication({
        titulo: '',
        conteudo: '',
        usuarioId: '',
        tipo: 'type',
      });
      setNewData({
        data: '',
      });

      GetFeed();

      Swal.fire({
        icon: 'success',
        title: 'Feito!',
        text: 'Evento criado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao criar novo evento!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const handleNewLembrete = async () => {
    const storedUser = GetLocalStorage('user');
    if (newPublication.titulo === '' || newData.data === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Preencha todos os campos!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    const formData = new FormData();
    formData.append('titulo', newPublication.titulo);
    formData.append('conteudo', newPublication.conteudo);
    formData.append('data', newData.data);
    formData.append('usuarioId', storedUser.id);
    formData.append('tipo', 'lembrete');
    formData.append('imagem', image);

    try {
      Swal.fire({
        icon: 'info',
        title: 'Criando lembrete...',
        didOpen: () => {
          Swal.showLoading()
        }
      });
      await createLembrete(formData);

      setNewPublication({
        titulo: '',
        conteudo: '',
        usuarioId: '',
        tipo: 'type',
      });

      Swal.fire({
        icon: 'success',
        title: 'Feito!',
        text: 'Lembrete criado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });

      GetFeed();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao criar novo lembrete!',
        showConfirmButton: false,
        timer: 1500
      });
      console.log("eeorrr", error)
    }
  }

  const handleSubmit = () => {
    try {
      if (newPublication.conteudo === '' || newPublication.titulo === '') {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Preencha todos os campos!',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }

      if (newPublication.tipo === 'lembrete') {
        handleNewLembrete();
      } else if (newPublication.tipo === 'publicação') {
        handleNewPublication();
        Swal.fire({
          icon: 'success',
          title: 'Publicado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      } else if (newPublication.tipo === 'evento') {
        handleNewEvent();
        Swal.fire({
          icon: 'success',
          title: 'Publicado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }

      Swal.fire({
        icon: 'error',
        title: 'Error! Não foi possível publicar',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao publicar!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  const handleImageClick = (e: any) => {
    e.classList.toggle('fullscreen');
  }


  return (
    <Container
      onClick={() => {
        dispatch(toggleMobileMenu());
        
      }}
    >
      <SearchInfoSection>
        <div>
          <Labels>Local de pesquisa:</Labels> 
          <Value>
            {searchQuery.onde || 'Você ainda não fez nenhuma pesquisa.'}
          </Value>
        </div>      
        {ShowSearchItems ? (
          <>
            <div>
              <Labels>Termo pesquisado:</Labels> 
              <Value>{searchQuery.oque}</Value>
            </div>
            <div>
              <Labels>Assunto da pesquisa:</Labels> 
              <Value>{searchQuery.assunto}</Value>
            </div>
            <div>
              <Labels>Resultados encontrados:</Labels> 
              <Value>{ count }</Value>
            </div>
            <div>
              <Labels>Última atualização:</Labels> 
              <Value>{new Date().toLocaleDateString()}</Value>
            </div>
            <div>
              <Labels>Limpar pesquisa</Labels>
              <Value>
                <span onClick={() => {
                  GetFeed();
                  setShowSearchItens(false);
                  searchQuery.onde = ''
                }}>Limpar</span>
              </Value>
            </div>
          </>
        ) : ''}
      </SearchInfoSection>

      <AsideLeft  />

      <HomeContent>
        {
          ShowSearchItems ?
          <SearchCardContainer>

            <CardSearch
              setCount={ setCount }
              count={count}
            />
            {ShowSearchItems && count <= 0 && <img src="not_found.png" alt="Nada encontrado" className='notfoundimg'/>}
          </SearchCardContainer>
          : ''
        }

        {
          !ShowSearchItems && (
            <TextArea>
              <div className='title-descript'>
                <label htmlFor="titulo">Titulo:</label>
                <input
                  type="text"
                  value={ newPublication.titulo }
                  onChange={(e) => setNewPublication({ ...newPublication, titulo: e.target.value })}
                  placeholder='Insira um titulo.'
                />
              </div>
              <textarea
                name="criar nova entrada"
                id="textare"
                value={ newPublication.conteudo }
                onChange={(e) => setNewPublication({ ...newPublication, conteudo: e.target.value })}
                placeholder='Escreva aqui a sua nova publicação, evento ou lembrete.'
                ></textarea>

              <div>
                <select
                  name="type"
                  id=""
                  value={ newPublication.tipo }
                  onChange={(e) => setNewPublication({ ...newPublication, tipo: e.target.value })}
                >
                    <option value="type" >Selecione um tipo.</option>
                    <option value="lembrete">Lembrete</option>
                    <option value="evento">Evento</option>
                    <option value="publicação">Publicação</option>
                  </select>

                  <label htmlFor="img" id='imge'>
                  {image && image.name || <img src="send_image.png" alt="Adicionar imagem" />}
                  
                  </label>
                    <input
                      type="file"
                      id='img'
                      accept='image/*'
                      onChange={(e) => setImage(e.target.files && e.target.files[0]) }
                      title='Adicionar imagem à publicação.'
                      placeholder='Adicionar imagem à publicação.'
                    />                   

                  <DivDataNewevent>
                    <input
                      type="date"
                      value={ newData.data }
                      onChange={(e) => setNewData({ ...newData, data: e.target.value })}
                      disabled={
                        newPublication.tipo === 'publicação' ? true : newPublication.tipo === 'type' ? true : false
                      }
                    />
                  </DivDataNewevent>

                <button
                  className='clear'
                  onClick={() => {
                    setNewPublication({
                      titulo: '',
                      conteudo: '',
                      usuarioId: '',
                      tipo: 'type',
                    });
                    setImage(null);
                  }}
                >
                  Limpar
                </button>
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Publicar
                </button>
              </div>
            </TextArea>
          )
        }

        {feed && !ShowSearchItems && feed.map((item: any, index: number) => (
          <NewsCardContainer key={index}>
            {configPubIndex === index && (
              <ConfigPublicacao
                setConfigPub={() => setConfigPubIndex(null)}
                handleGetFeed={GetFeed}
                configPub={configPubIndex === index}
                item={item}
                id = {item.id}
              />
            )}
            <CardSpanContainer>
              <span>{item.tipo}</span>
              <span
                className='config'
                onClick={() => {
                  setConfigPubIndex(configPubIndex === index ? null : index);
                }}
              >
                <img src="config_black.png" alt="" />
              </span>
            </CardSpanContainer>

            {item.usuario && (
              <CardAuthor>Publicado por: {item.usuario.nome || item.usuario.username}</CardAuthor>
            )}

            <CardContentAligned>
              <CardTitle>{item.titulo}</CardTitle>
                
                {item.conteudo && (
                  <CardContent>{item.conteudo}</CardContent>
                )}

              {item.imagem && (
                <CardContentImg
                  src={item.tipo === 'publicação' ? `${URL_IMAGE_PUBLICACAO}/${item.imagem}` : item.tipo === 'evento' ? `${URL_IMAGE_EVENTOS}/${item.imagem}` : `${URL_IMAGE_LEMBRETE}/${item.imagem}`}
                  alt={item.titulo} 
                  onClick={(e) => handleImageClick(e.target)}
                />
              )}
            </CardContentAligned>

            {item.url && (
              <CardLink href={item.url} target="_blank" rel="noopener noreferrer">
                Leia mais
              </CardLink>
            )}

            {item.createdAt && (
              <CardPublishedAt>                                
                { item.updatedBy && (<span>Editado por: <strong>{item.updatedBy}</strong>.</span>)}
                Publicado em: {item.createdAt.split('T')[0].split('-').reverse().join('/')} às {item.createdAt.split('T')[1].split(':')[0]}:{item.createdAt.split('T')[1].split(':')[1]}
              </CardPublishedAt>
            )}
          </NewsCardContainer>
        ))}

      </HomeContent>

      <AsideRight />
      
    </Container>
  );
};

export default Home;
