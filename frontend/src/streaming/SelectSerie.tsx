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
    { value: 'serie/1418/The-Big-Bang-Theory', label: 'The Big Bang Theory'},
    { value: 'serie/60735/The-Flash', label: 'The Flash' },
    { value: 'serie/1402/The-Walking-Dead', label: 'The Walking Dead' },
    { value: 'serie/1416/Grey\'s-Anatomy', label: 'Grey\'s Anatomy' },
    { value: 'serie/1622/The-Simpsons', label: 'The Simpsons' },
    { value: 'serie/60708/Gotham', label: 'Gotham' },
    { value: 'serie/60708/The-Blacklist', label: 'The Blacklist' },
    { value: 'serie/18165/The-Vampire-Diaries', label: 'The Vampire Diaries' },
    { value: 'serie/60735/Arrow', label: 'Arrow' },
    { value: 'serie/1396/Better-Call-Saul', label: 'Better Call Saul' },
    { value: 'serie/1668/How-I-Met-Your-Mother', label: 'How I Met Your Mother' },
    { value: 'serie/1399/Westworld', label: 'Westworld' },
    { value: 'serie/1416/Scandal', label: 'Scandal' },

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
