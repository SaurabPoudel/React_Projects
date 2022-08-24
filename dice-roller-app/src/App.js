
import { useState } from 'react';
import './index.css';

const App=()=> {
  const [diceNumber,setDiceNumber]= useState(6);
  const refreshDice=()=>{
    const ranno = Math.floor(Math.random()*6) + 1;
    setDiceNumber(ranno)
  }
  return (
    <div>
     <center>
       <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
       <br/>
       <button onClick={()=>refreshDice()} className='button'>Roll</button>
      </center>
    </div>
  );
}

export default App;
