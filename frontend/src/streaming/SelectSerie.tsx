import { useEffect, useState } from 'react';
import { SelectSeriesContainer } from './styled';
import { useNavigate } from 'react-router-dom';

type SelectSeriesProps = {
  setTitulo: (titulo: string) => void;
  setIMDB: (IMDB: number) => void;
  setTipoDeMidia: (tipoDeMidia: string) => void;
  season: number;
  episode: number;
};

const SelectSeries = ({ setIMDB, setTipoDeMidia, setTitulo, season, episode }: SelectSeriesProps) => {
  const navigate = useNavigate();
  const [selectASerie, setSelectASerie] = useState('select');

  useEffect(() => {
    if (selectASerie !== 'select') {
      const [tipo, imdb, titulo] = selectASerie.split('/');
      setIMDB(+imdb);
      setTipoDeMidia(tipo);
      setTitulo(titulo);
      navigate(`/${tipo}/${+imdb}/${titulo}/temporada-${season || 1}/episodio-${episode || 1}`);
    }
  }, [selectASerie, setIMDB, setTipoDeMidia, setTitulo, navigate, season, episode]);

  const seriesOptions = [
    { value: 'serie/4087/Arquivo-X', label: 'Arquivo X' },
    { value: 'serie/84958/Loki', label: 'Loki' }
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
