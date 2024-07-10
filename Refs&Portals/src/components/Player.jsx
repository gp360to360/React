import { useRef } from "react";
import { useState } from "react";
export default function Player() {
  const name = useRef()
 const [playerName,setPlayerName] = useState('')
  
  function handleClick(){
    setPlayerName(name.current.value)
    name.current.value = ' '
  }

  return (
    <section id="player">
      <h2>Welcome { playerName??'unknown entity'}</h2>
      <p>
        <input type="text" ref={name}/>
        <button onClick={handleClick}>Set Name </button>
      </p>
    </section>
  );
}
