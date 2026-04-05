import { useState } from "react";

function Button1(){
    
    const [number,adding]=useState(0);
    function addition(){
        SetCount(count+1);

    }
    
    
    
    return(
        
<>
        <h1>{count}</h1>
        <button onClick={addition}>Increment</button></>

);
    
}
export default Button1;