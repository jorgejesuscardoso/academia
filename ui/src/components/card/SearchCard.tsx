/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { calculateAge, calculateDaysUntil } from '../../utils/calculateDate';
import { CarParagraph, Card, CardContainer, CardTitle, Strong } from './style';
import { useEffect, useState } from 'react';
import MenuConfigClient from '../menus/cliente/MenuConfigClient';
import MenuConfigPlanos from '../menus/planos/ConfigPlanos';

type SearchType = {
  searchRedux: object[];
};

type SearchResult = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  dataInicio: string;
  status: string;
  planoId: number;
  plano: string;
  vencimento: string;
};

type SearchProp = {
  setCount: (count: number) => void;
  count?: number;
}

const CardSearch = ({ setCount }: SearchProp ) => {
  const searchSelector = useSelector((state: SearchType) => state.searchRedux as SearchResult[] );
  const typeSearchSelector = useSelector((state: any) => state.typeSearchRedux);
  const [searchData, setSearchData] = useState<SearchResult[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [dataToMenu, setDataToMenu] = useState<SearchResult>({} as any);

  const listaPlano = [
    { id: 1, nome: 'Mensal' },
    { id: 2, nome: 'Trimestral' },
    { id: 3, nome: 'Semestral' },
    { id: 4, nome: 'Anual' },
    { id: 5, nome: 'Bienal' },
    { id: 6, nome: 'Vitalício' }
  ];

 useEffect(() => {
  setSearchData(searchSelector);
  setCount(searchData.length)

 }, [searchSelector, searchData])

  const handleFixDate = (date: string) => {
    const dateFormatted = new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    return dateFormatted;
  };

  const converReturnDate = (date: number) => {
    if (date < 0) {
      return 'Vencido';
    } else if (date === 0) {
      return 'Vence hoje';
    }

    const anos = Math.floor(date / 365);
    const meses = Math.floor((date % 365) / 30);
    const dias = date % 30;

    if (anos > 20) return `Vitalício`;
  
    const partes = [];
  
    if (anos > 0) {
      partes.push(`${anos} ano${anos > 1 ? 's' : ''}`);
    }
  
    if (meses > 0) {
      partes.push(`${meses} mês${meses > 1 ? 'es' : ''}`);
    }
  
    if (dias > 0) {
      partes.push(`${dias} dia${dias > 1 ? 's' : ''}`);
    }
  
    return partes.join(', ');
  };

  const handleClassName = (date: any) => {
    if (date.planoId === 6) {
      return 'vitalicio';
    } else if (calculateDaysUntil(handleFixDate(date.vencimento)) < 0) {
      return 'vencido';
    } else if (calculateDaysUntil(handleFixDate(date.vencimento)) < 6) {
      return 'alertCard';
    } else if (date.status === 'Desativado') {
      return 'desativado';
    }
  };
  
  return (
    <CardContainer>
      { searchData.map((data: any) => (
        <Card
          key={data.email}
          className={ handleClassName(data) }
        >
          <span
            onClick={() => {
              setDataToMenu(data);
              setShowMenu(!showMenu);
            }}
          >
            <img src="config_black.png" alt="" />
          </span>
          <CardTitle>{data.nome}</CardTitle>

          <CarParagraph>
            <Strong>ID:</Strong> {data.id}.
          </CarParagraph>

          {
            typeSearchSelector.onde === 'user' ? (
              <CarParagraph>
                <Strong>Username:</Strong> {data.username}.
              </CarParagraph>
            ) : ''
          }

          {
            typeSearchSelector.onde === 'plano' ? (
              <>
                <CarParagraph>
                  <Strong>Valor:</Strong> {data.valor}
                </CarParagraph>
                <CarParagraph>
                  <Strong>Descrição:</Strong> {data.descricao}
                </CarParagraph>
              </>
            ) : ''
          }

          { 
            typeSearchSelector.onde === 'plano' ? ('') : (
              <>
                <CarParagraph className='mail'>
                <Strong>Email:</Strong> {data.email}.
                </CarParagraph>

                <CarParagraph className='mail'>
                  <Strong>Telefone:</Strong> {data.telefone}.
                </CarParagraph>
                  {
                    typeSearchSelector.onde === 'instrutor' || typeSearchSelector.onde === 'user' ? '' : (
                     <>
                      <CarParagraph className='mail'>
                        <Strong>Idade:</Strong> {calculateAge(handleFixDate(data.dataNascimento))} anos.
                      </CarParagraph>
                      <CarParagraph>
                        {
                          typeSearchSelector.onde === 'instrutor' ? '' : (
                            <CarParagraph>
                              <Strong>Data da inscrição:</Strong> {handleFixDate(data.dataInicio)}
                            </CarParagraph>
                          )
                        }
                      </CarParagraph>

                      <CarParagraph>
                        {
                          typeSearchSelector.onde === 'instrutor' ? '' : (
                            <CarParagraph>
                              <Strong>Status:</Strong> {data.status}
                            </CarParagraph>
                          )
                        }
                      </CarParagraph>
                    </>
                  )}
                <CarParagraph>
                  {
                    typeSearchSelector.onde === 'instrutor' || typeSearchSelector.onde === 'user' ? (

                      <>
                        <CarParagraph>
                          <Strong>Turno:</Strong> { data.turno  }
                        </CarParagraph>
                        
                        <CarParagraph>
                          <Strong>Função:</Strong> { data.role  }
                        </CarParagraph>
                      </>
                    ) : (
                      <CarParagraph>
                        <Strong>Plano:</Strong> {listaPlano.find((plano) => plano.id === data.planoId)?.nome}
                      </CarParagraph>
                    )
                  }
                </CarParagraph>

                <CarParagraph>
                  {
                    typeSearchSelector.onde === 'instrutor' || typeSearchSelector.onde === 'user' ? '' : (
                      <CarParagraph>
                        <Strong>Vencimento:</Strong> {converReturnDate(calculateDaysUntil(handleFixDate(data.vencimento)))}
                      </CarParagraph>
                    )
                  }
                </CarParagraph>
              </>
            )}

        </Card>
      ))}
      {
        showMenu && (typeSearchSelector.onde === 'cliente' ? (
        <MenuConfigClient
          id={dataToMenu.id}
          nome={dataToMenu.nome}
          email={dataToMenu.email}
          telefone={dataToMenu.telefone}
          dataInicio={dataToMenu.dataInicio}
          plano={dataToMenu.plano}
          planoId={dataToMenu.planoId}
          setToggleConfig={setShowMenu}
          handleGetList={() => {}}
        />
        ) : typeSearchSelector.onde === 'plano' ? (
          <MenuConfigPlanos
            handleGetPlanos={() => {}}
            setShowConfigMenu={setShowMenu}
            showConfigMenu={showMenu}          
          />
        ) : '')
      }
    </CardContainer>
  );
}

export default CardSearch;