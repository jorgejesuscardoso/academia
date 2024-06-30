import { useEffect, useState } from 'react';
import { StreamingContainer } from './styled';
import { GetLocalStorage, SetLocalStorage } from '../utils/localStorage';
import SelectSeries from './SelectSerie';

const Streaming = () => {
  const [episodios, setEpisodios] = useState(1);
  const [temporada, setTemporada] = useState(1);
  const [streaming, setStreaming] = useState('');
  const [titulo, setTitulo] = useState('');
  const [IMDB, setIMDB] = useState(0);
  const [tipoDeMidia, setTipoDeMidia] = useState('');

  useEffect(() => {
    const data = GetLocalStorage(titulo);
  
    if (data && data.temporada && data.episodios) {
      setTemporada(data.temporada);
      setEpisodios(data.episodios);
    } else {
      setTemporada(1);
      setEpisodios(1);
    }
  }, [titulo]);

  useEffect(() => {
    if (titulo && tipoDeMidia && IMDB) {
      const stream = `https://superflixapi.dev/${tipoDeMidia}/${IMDB}/${temporada}/${episodios}`;
      setStreaming(stream);
      SetLocalStorage(titulo, { temporada, episodios });
    }
  }, [temporada, episodios, IMDB, titulo, tipoDeMidia]);

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
          <p>Bushido esteve aqui! {'][, (][) ][,'},</p>
        </>
      ) }
      <SelectSeries
        setTitulo={setTitulo}
        setIMDB={setIMDB}
        setTipoDeMidia={setTipoDeMidia}
        season={temporada}
        episode={episodios}
      />
    </StreamingContainer>
  );
};

export default Streaming;
