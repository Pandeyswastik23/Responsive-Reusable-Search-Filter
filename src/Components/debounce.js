import React, { useState, useCallback } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar ( { placeholder, data } )
{

  const [filteredData, setFilteredData] = useState([]);
  const [ wordEntered, setWordEntered ] = useState( "" );
  

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

   const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items));
  };

  const optimizedFn = useCallback(debounce(handleChange), []);


  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="search"
          placeholder={placeholder}
          value={wordEntered}
          onChange={( e ) =>
          {
            optimizedFn( e.target.value );
             setWordEntered( e.target.value );
           }}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0,4).map((value, key) => {
            return (
              <div className="dataItem" >
                <p>{value.country} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;