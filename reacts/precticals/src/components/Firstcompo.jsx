import { useState } from "react";
import React from "react";
export default function Firstcompo(){
  let [name,setname] = useState("");
function handelevent(event){
  setname(event.target.value);
  event.preventDefault();
}


function handlesu(e)
{
    e.preventDefault();
    console.log(name);
}


return(
  <>
  <form onSubmit={handlesu}>
    <label htmlFor="username">enrt</label>
    <input type="text" id="username" placeholder="username" value={name}  onChange={handelevent}/>
    <button>submit</button>
  </form>
  </>
)
}