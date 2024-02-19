import { useState } from "react";
function App() 
{
  let [count ,setCount] = useState(0);
  //let count=0;
  const Counting =()=>
  {
    setCount(count++);
  }
  return (
    <>
<button onClick={Counting}>FeryalMoneer {count} </button>   
   </>
  )
}

export default App
