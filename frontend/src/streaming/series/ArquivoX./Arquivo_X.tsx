import { useEffect, useState } from 'react';
import { StreamingContainer } from '../../styled';

const Arquivo_X = () => {
  const [episodios, setEpisodios] = useState(0);
  const [temporada, setTemporada] = useState(0);
  const [streaming, setStreaming] = useState('');

  useEffect(() => {
    
    const stream = `https://superflixapi.dev/serie/4087/${temporada}/${episodios}`; 
    setStreaming(stream);
    
  }, [episodios, temporada]);

  return (
    <StreamingContainer>
      <h1>Arquivo X - Temporada {temporada} - Episódio {episodios}</h1>
      <iframe src={streaming} allowfullscreen webkitallowfullscreen="" mozallowfullscreen="" width="1000" height="500"></iframe>
      
      <div>
        <button
          onClick={() => setEpisodios(episodios - 1)}
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
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
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
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
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

export default Arquivo_X;