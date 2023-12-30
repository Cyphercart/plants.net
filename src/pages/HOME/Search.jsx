import React, { useState } from 'react';
import Rose from '../flowers/Rose';
import Tulip from '../flowers/Tulip';
import Lotus from '../flowers/Lotus';
import Marigold from '../flowers/Marigold';
import Dahlia from '../flowers/Dahlia';
import IfNot from '../IfNot';
import Orchid from '../flowers/Orchid';
import BirdofParadise from '../flowers/Birdofparadise';
import Iris from '../flowers/lris';
import Sunflower from '../flowers/sunflower';
import Hydrangea from '../flowers/Hydrangea';
import BleedingHeart from '../flowers/Bleeding-heart';
import Carnation from '../flowers/Carnation';
import AsterFlower from '../flowers/Aster';
import AzaleaFlower from '../flowers/Azela';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [matchedFlower, setMatchedFlower] = useState(null);

  const handleSearch = () => {
    if (searchValue === 'rose') {
      setMatchedFlower(<Rose />);
    } else if (searchValue === 'tulip') {
      setMatchedFlower(<Tulip />);
    } else if (
      searchValue === 'lotus' ||
      searchValue === 'lily' ||
      searchValue === 'water lily' ||
      searchValue === 'waterlily'
    ) {
      setMatchedFlower(<Lotus />);
    } else if (searchValue === 'marigold') {
      setMatchedFlower(<Marigold />);
    } else if (searchValue === 'dahlia') {
      setMatchedFlower(<Dahlia />)
    } else if (searchValue === 'orchid') {
      setMatchedFlower(<Orchid />)
    } else if (searchValue === 'birdofparadise') {
      setMatchedFlower(<BirdofParadise />)
    } else if (searchValue === 'lris' || searchValue === 'iris') {
      setMatchedFlower(<Iris />)
    } else if (searchValue === 'sunflower') {
      setMatchedFlower(<Sunflower />)
    } else if (searchValue === 'hydrangea') {
      setMatchedFlower(<Hydrangea />)
    } else if (searchValue === 'bleedingheart') {
      setMatchedFlower(<BleedingHeart />)
    } else if (searchValue === 'carnation') {
      setMatchedFlower(<Carnation />)
    } else if (searchValue === 'hydrangia') {
      setMatchedFlower(<Hydrangea />)
    } else if (searchValue === 'aster') {
      setMatchedFlower (<AsterFlower/>)
    } else if (searchValue === 'azalea') {
      setMatchedFlower(<AzaleaFlower/>)
    }

    else {
      setMatchedFlower(<IfNot />)
    }
  };


  return (
    <div className='search'>

      <h1>some world wide common flowers for farming at home :) search in below</h1>

      <input
        id='search'
        placeholder='flower (please write in small letters)'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch} >Search</button>
      {/* Render the matched flower component conditionally */}
      <div className="flower-description">
        {matchedFlower}
      </div>
    </div>
  );
};

export default Search;
