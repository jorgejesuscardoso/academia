import { useEffect, useState } from 'react';
import { StreamingContainer } from '../../styled';

const Loki = () => {
  const [episodios, setEpisodios] = useState(0);
  const [temporada, setTemporada] = useState(0);
  const [streaming, setStreaming] = useState('');

  useEffect(() => {
    
    const stream = `https://superflixapi.dev/serie/84958/${temporada}/${episodios}`; 
    setStreaming(stream);    

  }, [episodios, temporada]);

  return (
    <StreamingContainer>
      <h1>Loki - Temporada {temporada} - Episódio {episodios}</h1>
      <iframe src={streaming} allowFullScreen width="1000" height="500"></iframe>
            
      <div>
        <button
          onClick={() => setEpisodios(episodios - 1)}
          disabled={ episodios <= 1 }
        >
          {"<<"} Episódio anterior
        </button>
        <select
          name="select"
          id="select"
          onChange={(e) => setEpisodios(Number(e.target.value))}
          value={episodios}
          defaultValue='Selecione um Episódio'
          >
          <option value="select" hidden>Selecione um Episódio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button
          onClick={() => setEpisodios(episodios + 1)}
        >
          Próximo episódio {">>"}
        </button>
      </div>

      <div>
        <button
          onClick={() => setTemporada(temporada - 1)}
          disabled={temporada <= 1 || episodios <= 1}
        >
          {"<<"} Temporada anterior
        </button>
        <select
          name="select"
          id="select"
          onChange={(e) => setTemporada(Number(e.target.value))}
          value={temporada}
          defaultValue='Selecione uma Temporada'
          >
          <option value="select" hidden>Selecione uma Temporada</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <button
          onClick={() => setTemporada(temporada + 1)}
        >
          Próxima temporada {">>"}
        </button>
      </div>

    </StreamingContainer>
  );
};

export default Loki;