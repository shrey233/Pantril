import React from "react";
import ReactDOM from "react-dom";

/*
const data =({searchResults}) => {
}
function Search(props) {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value)
    props.refreshFunction(event.target.value)
  }

 React.useEffect(() => {
    const results = data.filter(data =>
      data.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
*/
 

 
const Search = (products) => {
  return (
    <div>
      
    </div>
    
    /*<form onsubmit ="getData">
    <div className="App">
      <input
        type="text"
        placeholder="Search by typing.."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
    </form>*/
  );
}
export default Search;