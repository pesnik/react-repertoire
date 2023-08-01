import './App.css';

import {Component} from 'react'

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
        <input className='input-filed' placeholder='search monsters' onChange={onMonsterSearch}/>
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
