import { useEffect, useState } from 'react';
import { SelectSeriesContainer } from './styled';
import { useNavigate } from 'react-router-dom';

type SelectSeriesProps = {
  setTitulo: (titulo: string) => void;
  setIMDB: (IMDB: number) => void;
  setTipoDeMedia: (tipoDeMidia: string) => void;
  season: number;
  episode: number;
};

const SelectSeries = ({ setIMDB, setTipoDeMedia, setTitulo, season, episode }: SelectSeriesProps) => {
  const paths = window.location.pathname.split('/');
  const titles = paths[3];

  const navigate = useNavigate();
  const [selectASerie, setSelectASerie] = useState('select');

  useEffect(() => {

    if (selectASerie === 'select' && !titles) navigate('/serie');
    
    if (selectASerie !== 'select') {
      const [tipo, imdb, titulo] = selectASerie.split('/');
      setIMDB(+imdb);
      setTipoDeMedia(tipo);
      setTitulo(titulo);
      navigate(`/${tipo}/${+imdb}/${titulo}/temporada-${season || 1}/episodio-${episode || 1}`);
    }
  }, [selectASerie, setIMDB, setTipoDeMedia, setTitulo, navigate, season, episode]);

  const seriesOptions = [
    { value: 'serie/4087/Arquivo-X', label: 'Arquivo X' },
    { value: 'serie/84958/Loki', label: 'Loki' },
    { value: 'serie/1399/Game-of-Thrones', label: 'Game of Thrones' },
    { value: 'serie/1396/Breaking-Bad', label: 'Breaking Bad' },
    { value: 'serie/1668/Friends', label: 'Friends' },
    { value: 'serie/1434/The-Big-Bang-Theory', label: 'The Big Bang Theory'},
    { value: 'serie/60735/The-Flash', label: 'The Flash' },
    { value: 'serie/60708/Arrow', label: 'Arrow' },
    { value: 'serie/1402/The-Walking-Dead', label: 'The Walking Dead' }
  ];

  return (
    <SelectSeriesContainer>
      <h1>Selecione uma série</h1>
      <select
        name="select"
        id="select"
        value={selectASerie}
        onChange={(e) => setSelectASerie(e.target.value)}
        defaultValue="select"
      >
        <option value="select" hidden>Selecione uma série</option>
        {seriesOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectSeriesContainer>
  );
};

export default SelectSeries;
