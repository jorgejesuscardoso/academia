import { useEffect, useState } from 'react';
import { SelectSeriesContainer } from './styled';
import { useNavigate } from 'react-router-dom';

type SelectSeriesProps = {
  setTitulo: (titulo: string) => void;
  setIMDB: (IMDB: number) => void;
  setTipoDeMedia: (tipoDeMidia: string) => void;
  setAd: (ad: boolean) => void;
  season: number;
  episode: number;
};

const SelectSeries = ({ setAd, setIMDB, setTipoDeMedia, setTitulo, season, episode }: SelectSeriesProps) => {
  const paths = window.location.pathname.split('/');
  const titles = paths[3];

  const navigate = useNavigate();
  const [selectASerie, setSelectASerie] = useState('select');  
  const [label, setLabel] = useState('');  

  useEffect(() => {
    const [tipo, imdb, titulo] = selectASerie.split('/');

    if (selectASerie === 'select' && !titles) navigate('/serie');  
    
    if (selectASerie !== 'select') {
      setTipoDeMedia(tipo);
      setTitulo(label);
      setIMDB(+imdb);
      navigate(`/${tipo}/${+imdb}/${titulo}/${season}/${episode}/`);
    }
  }, [
    selectASerie, setIMDB, setTipoDeMedia, setTitulo, navigate, season, episode, titles
  ]);

  const notAd = [
    { value: 'serie/84958/Loki', label: 'Loki' },
    { value: 'serie/1399/Game-of-Thrones', label: 'Game of Thrones' },
    { value: 'serie/1418/The-Big-Bang-Theory', label: 'The Big Bang Theory'},
    { value: 'serie/60735/The-Flash', label: 'The Flash' },
    { value: 'serie/1416/Grey\'s-Anatomy', label: 'Grey\'s Anatomy' },
    { value: 'serie/18165/The-Vampire-Diaries', label: 'The Vampire Diaries' },
  ];

  const witAd = [
    { value: 'serie/4087/Arquivo-X', label: 'Arquivo X' },
    { value: 'serie/135157/Alquimia-das-almas', label: 'Alquimia das almas (dorama)' },
    { value: 'serie/1396/Breaking-Bad', label: 'Breaking Bad' },
    { value: 'serie/1668/Friends', label: 'Friends' },
    { value: 'serie/1402/The-Walking-Dead', label: 'The Walking Dead' },
    { value: 'serie/456/The-Simpsons', label: 'The Simpsons (cartoon)' },
    { value: 'serie/60708/Gotham', label: 'Gotham' },
    { value: 'serie/60059/Better-Call-Saul', label: 'Better Call Saul' },
    { value: 'serie/124010/How-I-Met-Your-Mother', label: 'How I Met Your Mother' },
    { value: 'serie/95249/gossip-girls', label: 'Gossip Girls'},    
    { value: 'serie/96162/itaewon-class', label: 'Itaewon Class (dorama)'},
    { value: 'serie/67683/travellers', label: 'Travellers'},
    { value: 'serie/1622/supernatural', label: 'Supernatural'},
    { value: 'serie/1408/dr-house', label: 'Dr. House'},
    { value: 'serie/57243/doctor-who', label: 'Doctor Who'},
    { value: 'serie/1695/monk-um-detetive-diferente', label: 'Monk - Um detetive diferente'},
  ];

  return (
    <SelectSeriesContainer>
      
      <h1>Selecione uma série</h1>
      <h2>Sem propaganda</h2>
     <select
        name="select"
        id="select"
        value={selectASerie}
        onChange={(e) => {
          const labelS = e.target.options[e.target.selectedIndex];
          setSelectASerie(e.target.value);
          setLabel(labelS.text);
        }}
        defaultValue="select"
      >
        <option value="select" hidden>Selecione uma série</option>
        {notAd.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <h1>Com propagandas</h1>
      <h2>Infelizmente</h2>
      <select
        name="select"
        id="select"
        value={selectASerie}
        onChange={(e) => {
          setSelectASerie(e.target.value);
          setAd(true);
        }}
        defaultValue="select"
      >
        <option value="select" hidden>Selecione uma série</option>
        {witAd.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SelectSeriesContainer>
  );
};

export default SelectSeries;
