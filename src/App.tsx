
import { useState } from 'react';
import './App.css';
import './Components/Counter.css';
import CounterClass from './Components/CounterClass'

const App = () => {

  const [value,setValue] = useState<number>(1);

  return(<div>   
    <button type="button" onClick={()=>setValue(value + 1)}>Click me</button> 
    <CounterClass text = {value}/>
  </div>)
  
}

export default App;
