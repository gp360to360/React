import { useState } from "react"

export default function Player({initialName,Symbol}){
    const[playerName,setPlayerName] = useState(initialName)
    const [isEditing,setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing(updating => !updating);
        
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let editableplayerName = <span className="player-name">{playerName}</span>
    if(isEditing)
    {
        editableplayerName  = <input type="text" required value = {playerName} onChange={handleChange}/>
    }
   return( 
    <li>
        <span className="player">
            {editableplayerName}
    <span className="player-symbol">{Symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
  </li>   
   );
}