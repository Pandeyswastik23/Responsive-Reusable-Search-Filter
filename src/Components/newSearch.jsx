
import React, { useState } from "react";
import "./NewSearch.css";

const NewSearch = ({data, placeholder}) =>
{
    const [ filteredData, setFilteredData ] = useState( [] );
    const handleFilter = (event) =>
    {
        const searchWord = event.target.value;

        const newFilter = data.filter( ( value ) =>
        {
           return value.country.toLowerCase().includes( searchWord.toLowerCase() );
        } )

        if ( searchWord === "" )
        {
            setFilteredData( [] );
        }
        else
        {
             setFilteredData(newFilter);
        }
        
    }


 
    return (
        
        <div class="search">
            
            <div className="searchInputs">
                <h1>
                    <input type="search" placeholder={placeholder} onChange = {handleFilter}>
                </input>
            </h1>
            </div>
            {
                filteredData.length !== 0 &&
                (
                     <div className="dataResult">
                {
                    filteredData.slice(0,5).map( ( value, key ) =>
                    {
                        return (
                            <div className="dataItem">

                                
                                <p>
                                    {value.country}
                                  </p>

                                
                            </div>
                        )
                    })
                }

            </div>
                )
            }
           
            
        </div>
    )
}

export default NewSearch;