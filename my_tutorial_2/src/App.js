import React,{useState} from "react";

import "./App.css";
 
function App() {
    //var name, function
   const [isRed, setRed] = useState(false)
   const [count, setCount] = useState(0);
   const [num, setNum] = useState(100);
  
 
   const increment = () => {
    setCount(count+1);
    setRed(true);
    //  -->to Toggle -> setRed(!isRed)
   }

    const decrement = () => {
      setNum(num-1);
      setRed(false)
    }


  return (
   
    <div className="app">
      
  <h1>Counter </h1>  
   <button onClick={increment}> Increment </button>
   <h2 className="incre">{count}</h2>
   <button onClick={decrement}>Decrement</button>
   <h2 className="decre">{num}</h2>
   <h1 className={isRed ? 'red' : "" }>Change the Color!!</h1>

    
    </div>
  )
}
export default App

// What is state ?
// a data or varible based on which our app renders itself