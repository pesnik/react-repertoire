import './SearchBox.style.css'

const SearchBox = (props) => {
    return (
        <input 
            type="search" 
            className="search-box" 
            placeholder="Search Monsters"
            onChange={props.onChange} />
    )
};

export default SearchBox;