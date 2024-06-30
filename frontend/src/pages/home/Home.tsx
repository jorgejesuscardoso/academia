/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { NewsCardContainer, CardDescription, CardLink, CardTitle, Container, HomeContent, Labels, SearchInfoSection, Value, SearchCardContainer, CardAuthor, FonteNews, CardPublishedAt, CardContent, TextArea, DivDataNewevent } from './style';
import CardSearch from '../../components/card/SearchCard';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { useState, useEffect } from 'react';
import { NewsApi } from '../../service/NewsApi';
import Swal from 'sweetalert2';

const Home = () => {
  const searchQuery = useSelector((state: any) => state.typeSearchRedux);
  const [feed, setFeed] = useState<any>([]);
  const [ShowSearchItems, setShowSearchItens] = useState(false);
  const [count, setCount] = useState(0)
  const [newPublished, setNewPublished] = useState({
    date: '',
    type: 'type',
    content: '',
    created_by: ''
  })


  useEffect(() => {
    setShowSearchItens(true)
  }, [searchQuery])

  useEffect(() => {

    GetNewsApi()
    setShowSearchItens(false)
  }, []);

  const GetNewsApi = async () => {
    const news = await NewsApi();
    setFeed(news.articles)
    return news;
  }

  const handleNewPublished = () => {
    if (newPublished.date === '' && newPublished.type === 'evento') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecione uma data para o evento!',
      });
      return;
    } else if ( newPublished.date === '' && newPublished.type === 'lembrete') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecione uma data para o lembrete!',
      });
      return;
    } else if (newPublished.content === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Escreva algo para publicar!',
      });
      return;
    } else if (newPublished.type === 'type') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Selecione um tipo de publicação!',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Publicação realizada com sucesso!',
      text: 'Atualize a página para ver a publicação.',
      showConfirmButton: false,
      timer: 2500
    });
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
                  GetNewsApi();
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
              <p>...</p>
              <textarea
                name="criar nova entrada"
                id="textare"
                value={ newPublished.content }
                onChange={(e) => setNewPublished({ ...newPublished, content: e.target.value })}
                placeholder='Escreva aqui a sua nova publicação, evento ou lembrete.'
                ></textarea>

              <div>
                <select
                  name="type"
                  id=""
                  value={ newPublished.type }
                  onChange={(e) => setNewPublished({ ...newPublished, type: e.target.value })}
                >
                    <option value="type" >Selecione um assunto.</option>
                    <option value="lembrete">Lembrete</option>
                    <option value="evento">Evento</option>
                    <option value="public">Publicação</option>
                  </select>

                  <DivDataNewevent>
                    <input
                      type="date"
                      value={ newPublished.date }
                      onChange={(e) => setNewPublished({ ...newPublished, date: e.target.value })}
                      disabled={
                        newPublished.type === 'public' ? true : newPublished.type === 'type' ? true : false
                      }
                    />
                  </DivDataNewevent>
                <button
                  onClick={() => {
                    handleNewPublished();
                  }}
                >
                  Publicar
                </button>
              </div>
            </TextArea>
          )
        }

        { feed && !ShowSearchItems && feed.map((item: any, index: number) => (
            <NewsCardContainer key={ index }>
              <CardTitle>{item.title}</CardTitle>

              {item.author && <CardAuthor>Autor: {item.author}</CardAuthor>}
              {item.source && <FonteNews>Fonte: {item.source.name}</FonteNews>}

              <CardDescription>{item.description}</CardDescription>

              {item.content && <CardContent>Conteúdo: {item.content}</CardContent>}

              <CardLink href={item.url} target="_blank" rel="noopener noreferrer">
                Leia mais
              </CardLink>

              {
                item.publishedAt &&
                  <CardPublishedAt>
                    Publicado em: {item.publishedAt.split('T')[0].split('-').reverse().join('/')} as {item.publishedAt.split('T')[1].split(':').slice(0,1).join(':')} horas e {item.publishedAt.split('T')[1].split(':').slice(1,2).join(':')} minutos.
                  </CardPublishedAt>
              }
              </NewsCardContainer>
            ))
        }
      </HomeContent>
      <AsideRight />
    </Container>
  );
};

export default Home;
