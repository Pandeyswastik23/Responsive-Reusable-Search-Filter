import './App.css';

// import SearchBar from './Components/SearchBar';
import Data from "./DATA.json"
import NewSearch from './Components/newSearch';


function App ()
{
  
  return (
    <div className="App">

      <NewSearch placeholder = "Enter a country na" data={Data}/>
        {/* <SearchBar placeholder = "Enter Country name..." data = {Data}/> */}
      
       
    </div>
  );
}

export default App;
