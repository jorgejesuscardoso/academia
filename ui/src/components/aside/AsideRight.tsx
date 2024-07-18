/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { AsideRightContainers, AsideRightContent, BorderDivision, Warnings } from './style';
import { getLembretes } from '../../service/lembrete';
import { getEventos } from '../../service/eventoApi';

const AsideRight = () => {
  const params = window.location.pathname.split('/')[1];
  const classname = params !== 'home' ? 'asideRight' : '';

  const [lembretes, setLembretes] = useState([])
  const [toDayMemo, setToDayMemo] = useState([])
  const [getEvents, setGetEvents] = useState([]);

  useEffect(() =>{
    obterLembretes();
    obterEvento();
  }, [])

  const obterLembretes = async () => {
    try {
      const get = await getLembretes();
  
      const sortMemo = get.sort((a: any, b: any) => new Date(a.data).getTime() - new Date(b.data).getTime());
  
      const today = new Date().toISOString().split('T')[0];
  
      const todayMemos = [];
      const otherMemos = [];

      for (const memo of sortMemo) {
        const memoDate = new Date(memo.data); 
        memoDate.setDate(memoDate.getDate() + 1);
      
        const memoDateISO = memoDate.toISOString().split('T')[0];
      
        if (memoDateISO === today) {
          todayMemos.push(memo);
        } else if (memoDate.getTime() > new Date().getTime()) {
          otherMemos.push(memo);
        }
      }
      
  
      const limitedToDay = todayMemos.slice(0, 4);
      const limited = otherMemos.slice(0, 3);
  
      setToDayMemo(limitedToDay as []);
      setLembretes(limited as []);
  
    } catch (error) {
      console.error("Erro ao obter lembretes:", error);
    }
  }

  const obterEvento = async () => {
    const events = await getEventos();    
    setGetEvents(events.slice(0, 4))
  }
     
  return (
    <AsideRightContainers className={ classname }>
      <AsideRightContent className="asideright__container">
        <div className="asideright__container--content">
          <img 
            src="academiaLogo.png"
            alt="Logo marca"
            title="Logo marca"
          />
        </div>
        <div>
          <h3>Lembretes</h3>
          <div>
            <h4>Hoje</h4>
            <ul>
              {
                toDayMemo.length > 0 ? toDayMemo.map((s: any) => (
                  <li key={ s.id }>
                    {s.titulo}
                  </li>
                ))
                : <Warnings>Não há lembretes para hoje.</Warnings>
              }
              
              <li className='verMais'>ver mais</li>
            </ul>            
          </div>
          <BorderDivision></BorderDivision>
          <div>
            <h4>Próximos Lembretes</h4>            
            {lembretes ? (
              <ul>
             
                 {
                  lembretes.map((s: any) => (
                    <li key={ s.id }>
                      {s.titulo}
                    </li>
                  ))
                }                
              
                <li className='verMais'>ver mais</li>
              </ul> )
            : <Warnings>Não há lembretes régistrado.</Warnings>
              }           
          </div>
          <div>
            <h3>Eventos</h3>
            <div>
              {
                getEvents && getEvents.length > 0
                ? (
                  <ul>
                    {
                     getEvents.map((s: any) =>
                      <li key={ s.id }>{s.titulo}</li>
                     )
                    }
                    
                    <li className='verMais'>ver mais</li>
                  </ul>
                )
                : <Warnings>Não há eventos registrados.</Warnings>
              }
            </div>
          </div>
        </div>
      </AsideRightContent>
    </AsideRightContainers>
  );
}

export default AsideRight;
