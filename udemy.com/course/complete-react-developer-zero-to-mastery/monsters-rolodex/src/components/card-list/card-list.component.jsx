import {Component} from 'react'
import "./card-list.styles.css"

class CardList extends Component {
    render() {
        const {monsters} = this.props;
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    return (
                    <div key={monster.id} className='card-container'>
                        <img
                            alt={monster.name} 
                            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
                        <h1>{monster.name}</h1>
                        <p>{monster.email}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;