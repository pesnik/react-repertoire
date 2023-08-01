import './App.css';

import {Component} from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.components'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  onMonsterSearch = (e) => {
    const searchString = e.target.value.toLowerCase()
    this.setState({searchString})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState({monsters: monsters}))
  }

  render() {
    const {monsters, searchString} = this.state;
    const {onMonsterSearch} = this;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchString));
    return (
      <div className="App">
        <SearchBox 
          className='search-box' 
          placeholder='search monsters' 
          onMonsterSearch={onMonsterSearch}/>
          
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
