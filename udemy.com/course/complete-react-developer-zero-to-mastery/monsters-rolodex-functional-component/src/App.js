import './App.css';
import SearchBox from './components/search-box/SearchBox.component';
import CardList from './components/card-list/CardList.component';

import { useEffect, useState } from 'react';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const filteredMonsters = monsters.filter(
        monster => monster.name.toLowerCase().includes(searchString.toLowerCase()))

      setFilteredMonsters(filteredMonsters);
  }, [monsters, searchString])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters))
  }, []);

  const onChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div>
      <SearchBox onChange={onChange}/>
      <CardList monsters={filteredMonsters} searchString={searchString}/>
    </div>
  )
};

export default App;