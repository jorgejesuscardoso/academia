/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { NewsCardContainer, CardLink, CardTitle, Container, HomeContent, Labels, SearchInfoSection, Value, SearchCardContainer, CardAuthor, CardPublishedAt, CardContent, TextArea, DivDataNewevent, CardDescription, CardContentImg } from './style';
import CardSearch from '../../components/card/SearchCard';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { criarPublicacao, listarPublicacoes } from '../../service/publicacaoApi';
import { GetLocalStorage } from '../../utils/localStorage';

const Home = () => {
  const searchQuery = useSelector((state: any) => state.typeSearchRedux);
  const [feed, setFeed] = useState<any>([]);
  const [ShowSearchItems, setShowSearchItens] = useState(false);
  const [count, setCount] = useState(0)
  const [newPublication, setNewPublication] = useState({
    titulo: '',
    descricao: '',
    conteudo: '',
    usuarioId: '',
    tipo: 'type',
  })
  const [image, setImage] = useState<any>(null);
  const [newLembrete, setNewLembrete] = useState({
    titulo: '',
    descricao: '',
    data: '',
    usuarioId: '',
    type: 'lembrete',
  })

  const URL_IMAGE = 'http://localhost:3030/publicacao/img/';

  useEffect(() => {
    setShowSearchItens(true)
  }, [searchQuery])

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
        text: 'Erro ao criar nova publicação!',
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
    } else if (newPublication.tipo === 'public' && newPublication.conteudo === '') {
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
    data.append('descricao', newPublication.descricao);
    data.append('conteudo', newPublication.conteudo);
    data.append('usuarioId', storedUser.id);
    data.append('tipo', newPublication.tipo);
    data.append('imagem', image);

    try {

      const newPub = await criarPublicacao(data);
      
      setNewPublication({
        tipo: 'type',
        titulo: '',
        descricao: '',
        conteudo: '',
        usuarioId: '',
      });

      setImage(null);
    
      Swal.fire({
        icon: 'success',
        title: 'Publicação realizada com sucesso!',
        text: 'Atualize a página para ver a publicação.',
        showConfirmButton: false,
        timer: 2500
      });

      GetFeed();
      console.log("resp",newPub);
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

  return (
    <Container>
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
              <div className='title-descript'>
                <label htmlFor="titulo">Descrição:</label>
                <input
                  type="text"
                  value={ newPublication.descricao }
                  onChange={(e) => setNewPublication({ ...newPublication, descricao: e.target.value })}
                  placeholder='Insira uma descrição.'
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
                    <option value="public">Publicação</option>
                  </select>

                  <label htmlFor="img" id='imge'>
                  {image && image.name || 'Enviar imagem.'}
                  </label>
                    <input
                      type="file"
                      id='img'
                      accept='image/*'
                      onChange={(e) => setImage(e.target.files[0]) }
                      title='Adicionar imagem à publicação.'
                      placeholder='Adicionar imagem à publicação.'
                    />                   

                  <DivDataNewevent>
                    <input
                      type="date"
                      value={ newLembrete.data }
                      onChange={(e) => setNewLembrete({ ...newLembrete, data: e.target.value })}
                      disabled={
                        newPublication.tipo === 'public' ? true : newPublication.tipo === 'type' ? true : false
                      }
                    />
                  </DivDataNewevent>

                <button
                  className='clear'
                  onClick={() => {
                    setNewPublication({
                      titulo: '',
                      descricao: '',
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
                    handleNewPublication();
                  }}
                >
                  Publicar
                </button>
              </div>
            </TextArea>
          )
        }

        { feed && !ShowSearchItems && feed.map((item: any, index: number) => (
          <NewsCardContainer key={index}>
            <span>{item.tipo === 'public' ? 'Publicação' : 'News'}</span>

            {item.usuario && (
              <CardAuthor>Publicado por: {item.usuario.nome}</CardAuthor>
            )}

            <CardTitle>{item.titulo}</CardTitle>
            
            {item.descricao && (
              <CardDescription>{item.descricao}</CardDescription>
            )}

            {item.conteudo && (
              <CardContent>{item.conteudo}</CardContent>
            )}

            {item.imagem && (
              <CardContentImg src={`${URL_IMAGE}/${item.imagem}`} alt={item.titulo} />
            )}

            {item.url && (
              <CardLink href={item.url} target="_blank" rel="noopener noreferrer">
                Leia mais
              </CardLink>
            )}

            {item.createdAt && (
              <CardPublishedAt>
                Publicado em: {item.createdAt.split('T')[0].split('-').reverse().join('/')} às {item.createdAt.split('T')[1].split(':')[0]}:{item.createdAt.split('T')[1].split(':')[1]}
              </CardPublishedAt>
            )}

            {item.publishedAt && (
              <CardPublishedAt>
                Publicado em: {item.publishedAt.split('T')[0].split('-').reverse().join('/')} às {item.publishedAt.split('T')[1].split(':')[0]}:{item.publishedAt.split('T')[1].split(':')[1]}
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
