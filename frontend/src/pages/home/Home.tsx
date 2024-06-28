/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { NewsCardContainer, CardDescription, CardLink, CardTitle, Container, HomeContent, Labels, SearchInfoSection, Value, SearchCardContainer } from './style';
import CardSearch from '../../components/card/SearchCard';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { useState, useEffect } from 'react';

const Home = () => {
  const searchQuery = useSelector((state: any) => state.typeSearchRedux);
  const [feed, setFeed] = useState<any>([]);
  const [ShowSearchItems, setShowSearchItens] = useState(false);
  const [count, setCount] = useState(0)


  useEffect(() => {
    setShowSearchItens(true)
  }, [searchQuery])

  useEffect(() => {    
    generateFakeFeed();
    setShowSearchItens(false)
  }, []);

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
      {
        "title": "Nova Tecnologia de Calçados Promete Melhorar Desempenho em 20%",
        "description": "Desenvolvedores lançam calçado inovador que promete aumentar a eficiência e reduzir o impacto nas articulações dos atletas.",
        "link": "https://example.com/noticia4"
      },
      {
        "title": "Estudo Aponta Benefícios da Meditação para Atletas",
        "description": "Pesquisadores descobriram que a meditação pode melhorar o foco e a recuperação muscular, ajudando atletas a alcançarem melhores resultados.",
        "link": "https://example.com/noticia5"
      },
      {
        "title": "Academias Investem em Treinamento Funcional para Todos os Públicos",
        "description": "O treinamento funcional está ganhando espaço nas academias por ser adaptável a diferentes níveis de condicionamento físico.",
        "link": "https://example.com/noticia6"
      },
      {
        "title": "Nova Dieta Cetogênica: Uma Revolução na Perda de Peso",
        "description": "Especialistas discutem os benefícios e desafios da dieta cetogênica, que tem ganhado popularidade entre atletas e entusiastas do fitness.",
        "link": "https://example.com/noticia7"
      },
      {
        "title": "Aplicativos de Fitness: Acompanhamento de Treinos em Tempo Real",
        "description": "Aplicativos de fitness estão ajudando atletas a monitorarem seu progresso e manterem a motivação com treinos personalizados.",
        "link": "https://example.com/noticia8"
      },
      {
        "title": "Yoga Para Atletas: Aumente a Flexibilidade e Reduza o Estresse",
        "description": "A prática de yoga está se tornando uma ferramenta essencial para atletas que buscam melhorar a flexibilidade e reduzir o estresse.",
        "link": "https://example.com/noticia9"
      },
      {
        "title": "Proteínas Vegetais: Uma Alternativa Saudável para Atletas",
        "description": "Nutricionistas recomendam proteínas vegetais como uma opção saudável e sustentável para atletas de alta performance.",
        "link": "https://example.com/noticia10"
      },
      {
        "title": "Recuperação Pós-Treino: O Papel dos Crioterápicos",
        "description": "Técnicas de crioterapia estão sendo utilizadas para acelerar a recuperação muscular e reduzir inflamações após treinos intensos.",
        "link": "https://example.com/noticia11"
      }        
    ];
    setFeed(fakeData);
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
                  generateFakeFeed();
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
          ShowSearchItems &&
          <SearchCardContainer>

            <CardSearch
              setCount={ setCount }
              count={count}
            />

          </SearchCardContainer>
        }

        { !ShowSearchItems && feed.map((item: any, index: number) => (
            <NewsCardContainer key={ index }>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardLink href={item.link} target="_blank" rel="noopener noreferrer">
                Leia mais
              </CardLink>
            </NewsCardContainer>
          ))
        }
      </HomeContent>
      <AsideRight />
    </Container>
  );
};

export default Home;
