/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { SeriesContainer } from './style';
import Navbar from '../nav/NavBar';

const SeriesPage = () => {
 
  const [series, setSeries] = useState([] as any[]);
  useEffect(() => {

  }, []);

  useEffect(() => {
    setSeries([
      { id: 1, title: 'Loki', poster: 'https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg' },
      { id: 2, title: 'Game of Thrones', poster: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg' },
      { id: 3, title: 'The Big Bang Theory', poster: 'https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg' },
      { id: 4, title: 'The Flash', poster: 'https://image.tmdb.org/t/p/w500/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg' },
      { id: 5, title: 'Grey\'s Anatomy', poster: 'https://image.tmdb.org/t/p/w500/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg' },
      { id: 6, title: 'The Vampire Diaries', poster: 'https://image.tmdb.org/t/p/w500/kLEha9zVVv8acGFKTX4gjvSR2Q0.jpg' },
    ]);
  }, []);

  return (
    <SeriesContainer>
      <Navbar />
    </SeriesContainer>
  );
};

export default SeriesPage;
