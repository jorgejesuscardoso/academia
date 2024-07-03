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
  const [tipoDeMedia, setTipoDeMedia] = useState('');
  const [ad, setAd] = useState(true);

  useEffect(() => {
    const data = GetLocalStorage(titulo);

    if (data && data.temporada && data.episodios) {
      setTemporada(data.temporada);
      setEpisodios(data.episodios);
      setAd(data.ad);
    } else {
      setTemporada(1);
      setEpisodios(1);
    }
  }, [titulo]);

  useEffect(() => {
    if (ad) {
      const stream = `https://superflixapi.dev/serie/${IMDB}/${temporada}/${episodios}`;
      setStreaming(stream);
      SetLocalStorage(titulo, { temporada, episodios, ad: true });
      setAd(false); 
      return;
    }

    if (titulo && tipoDeMedia && IMDB) {
      const stream = `https://embedder.net/e/${IMDB}/${temporada}/${episodios}`;
      setStreaming(stream);
      SetLocalStorage(titulo, { temporada, episodios, ad: false});
      setAd(false); 
    }
  }, [temporada, episodios, IMDB, titulo]);

  return (
    <StreamingContainer>
      {titulo && (
        <>
          <h1>{titulo} - Temporada {temporada} - Episódio {episodios}</h1>
          <iframe
            src={streaming}
            allowFullScreen
            sandbox='allow-same-origin allow-scripts notallow-popups allow-forms'
          ></iframe>
          
          <div>
            <button onClick={() => setEpisodios(prev => Math.max(prev - 1, 1))}>
              {"<<"} Episódio anterior
            </button>
            <button onClick={() => setEpisodios(episodios + 1)}>
              Próximo episódio {">>"}
            </button>
          </div>

          <div>
            <button onClick={() => {
              setTemporada(prev => Math.max(prev - 1, 1));
              setEpisodios(1);
            }}>
              {"<<"} Temporada anterior
            </button>
            <button onClick={() => {
              setTemporada(prev => prev + 1);
              setEpisodios(1);
            }}>
              Próxima temporada {">>"}
            </button>
          </div>
          <p>Bushido esteve aqui!  -- ..:: {' =][, (][) ][,= '} ::.. --</p>
          <p>Caso aja erro ao trocar do player do sem para com propaganda, atualize a página!</p>
        </>
      )}

      <SelectSeries
        setTitulo={setTitulo}
        setIMDB={setIMDB}
        setTipoDeMedia={setTipoDeMedia}
        season={temporada}
        episode={episodios}
        setAd={setAd}
      />
    </StreamingContainer>
  );
};

export default Streaming;
