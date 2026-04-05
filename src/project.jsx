
import { useState } from "react";

function Project(){
 const [number,adding]=useState(0);
    function addition(){
        adding(number+1)

    }

  
    function sub(){
        adding(number-1)

    }

    function reset(){
      adding(0)

    }
    
    
    
    return(
        
<>
        <h1 className="number">{number}</h1>
        
        
        
        <div className="but">
            <button className="inc" onClick={addition}>Increment</button>   
        <button className="dec" onClick={sub}>Decrement</button>
        <button className="res" onClick={reset}>reset</button>
        </div>
        </>

);
}
export default Project;