// import Button from 'react-bootstrap/Button';

import { useState } from "react";


const Counter = () => {
   
     const [count,setCount] = useState<number>(1)
     const [type,setType] = useState<string>("odd");
   
    const reduce = () =>{        
       if(count > 0){       
         setCount(count - 1)
         //showNumberType();
       }
    }

    const add = () =>{        
        setCount(count + 1)
       // showNumberType();
    } 
    
    const showNumberType =() =>{
        if ((count % 2) == 0) {
            setType("even")           
        } else {
            setType("odd")
        }
    }

    

    return <div >         
        <div className="counter">
            <button className="minus" onClick={reduce}>-</button>
            <input type="text" value={count} />
            <button className="plus" onClick={()=> add()}>+</button>           
            {type}
        </div>
    </div>

}

export default Counter;
