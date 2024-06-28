/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { CardContainer, CardDescription, CardLink, CardTitle, Container, HomeContent, Labels, SearchInfoSection, Value } from './style';
import CardSearch from '../../components/card/SearchCard';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { useState, useEffect } from 'react';

const Home = () => {
  const typeSearchSelector = useSelector((state: any) => state.typeSearchRedux);
  const [feed, setFeed] = useState<any>([]);

  useEffect(() => {
    const generateFakeFeed = () => {
      const fakeData = [
        {
          title: 'Novo Estudo Revela: Alongamento Reduz Lesões em 30%',
          description: 'Um estudo recente mostra que uma rotina de alongamento pode reduzir o risco de lesões em atletas.',
          link: 'https://example.com/noticia1',
        },
        {
          title: 'Nutrição Esportiva: Suplementos Naturais Ganham Popularidade',
          description: 'Suplementos como açaí e chia estão em alta entre atletas devido às suas propriedades antioxidantes e energéticas.',
          link: 'https://example.com/noticia2',
        },
        {
          title: 'Tendência Fitness: Treino HIIT Domina Academias em Todo o Mundo',
          description: 'O treino intervalado de alta intensidade continua sendo a modalidade mais popular nas academias.',
          link: 'https://example.com/noticia3',
        },
      ];
      setFeed(fakeData);
    };
    generateFakeFeed();
  }, []);
  console.log(feed);
  return (
    <Container>
      <SearchInfoSection>
        <div>
          <Labels>Local de pesquisa:</Labels> 
          <Value>{typeSearchSelector.onde || 'Você ainda não fez nenhuma pesquisa.'}</Value>
        </div>      
        {typeSearchSelector && (
          <>
            <div>
              <Labels>Termo pesquisado:</Labels> 
              <Value>{typeSearchSelector.oque}</Value>
            </div>
            <div>
              <Labels>Assunto da pesquisa:</Labels> 
              <Value>{typeSearchSelector.assunto}</Value>
            </div>
          </>
        )}
      </SearchInfoSection>
      <AsideLeft />
      <HomeContent>
        {
          typeSearchSelector !== '' ? 
          <CardSearch />
          : feed.map((item: any, index: number) => (
            <CardContainer key={ index }>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardLink href={item.link} target="_blank" rel="noopener noreferrer">
                Leia mais
              </CardLink>
            </CardContainer>
          ))
        }
      </HomeContent>
      <AsideRight />
    </Container>
  );
};

export default Home;
