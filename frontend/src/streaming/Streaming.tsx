import { useEffect, useState } from 'react';
import { StreamingContainer } from './styled';
import { GetLocalStorage, SetLocalStorage } from '../utils/localStorage';
import SelectSeries from './SelectSerie';

const Streaming = () => {
  const paths = window.location.pathname.split('/');
  const tipos = paths[1];
  const IMDBs = paths[2];
  const titles = paths[3];
  const temp = paths[4];
  const epis = paths[5];

  const [episodios, setEpisodios] = useState(1);
  const [temporada, setTemporada] = useState(1);
  const [streaming, setStreaming] = useState('');
  const [titulo, setTitulo] = useState('');
  const [IMDB, setIMDB] = useState(0);
  const [tipoDeMedia, setTipoDeMedia] = useState('');

  useEffect(() => {
    const data = GetLocalStorage(titulo);

    if (tipos && IMDBs && titles && temp && epis) {
      const season = temp.split('-')[1];
      const episodios = epis.split('-')[1];
      setTitulo(titles);
      setIMDB(+IMDBs);
      setTipoDeMedia(tipos);
      setTemporada(+season);
      setEpisodios(+episodios);
      return;
    }
  
    if (data && data.temporada && data.episodios) {
      setTemporada(data.temporada);
      setEpisodios(data.episodios);
    } else {
      setTemporada(1);
      setEpisodios(1);
    }
  }, [titulo, tipos, IMDBs, titles]);

  useEffect(() => {
    if (titulo && tipoDeMedia && IMDB) {
      const stream = `https://superflixapi.dev/${tipoDeMedia}/${+IMDB}/${temporada}/${episodios}`;
      setStreaming(stream);
      SetLocalStorage(titulo, { temporada, episodios });
    }
  }, [temporada, episodios, IMDB, titulo, tipoDeMedia, epis, temp]);

  return (
    <StreamingContainer>
      { titulo && (
        <>
          <h1>{titulo} - Temporada {temporada} - Episódio {episodios}</h1>
          <iframe src={streaming} allowFullScreen></iframe>
          
          <div>
            <button
              onClick={() => setEpisodios(prev => Math.max(prev - 1, 1))}
            >
              {"<<"} Episódio anterior
            </button>
            
            <button
              onClick={() => setEpisodios(prev => prev + 1)}
            >
              Próximo episódio {">>"}
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                setTemporada(prev => Math.max(prev - 1, 1));
                setEpisodios(1);
              }}
            >
              {"<<"} Temporada anterior
            </button>
            
            <button
              onClick={() => {
                setTemporada(prev => prev + 1);
                setEpisodios(1);
              }}
            >
              Próxima temporada {">>"}
            </button>
          </div>
          <p>Bushido esteve aqui!  -- ..:: {' =][, (][) ][,= '} ::.. --</p>
        </>
      ) }
      <SelectSeries
        setTitulo={setTitulo}
        setIMDB={setIMDB}
        setTipoDeMedia={setTipoDeMedia}
        season={temporada}
        episode={episodios}
      />
    </StreamingContainer>
  );
};

export default Streaming;
