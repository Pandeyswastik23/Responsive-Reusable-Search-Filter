import React from "react";
import { useState } from "react";

function Count ()
{
    const [ value, newValue ] = useState( 0 )
    

    return (
        
        <div>
            <h1>This is simple counter app</h1>

            <div className="counter">
                <h2 className="count">value is {value}</h2>
                
                <button className="IncrementCounter" onClick={()=> newValue(value+1)}>Increment</button>
                &nbsp;&nbsp;&nbsp;
                <button className="DecrementtCounter" onClick={()=> newValue(value-1)} disabled = {value === 0}>Decrement</button>
                &nbsp;&nbsp;&nbsp;
                <button className="Reset" onClick={()=> newValue(0)}>Reset</button>
            </div>
        </div>
    );

}


export default Count;
