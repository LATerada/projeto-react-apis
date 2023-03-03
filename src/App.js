import { useState } from "react";
import { createGlobalStyle } from "styled-components"
import { Router } from "./Router/Router";

const GlobaStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  const [pokedex,setPokedex] = useState(["pika","Charmander","Bullbasar"])

  const deletePokemonFromPokedex = (id) => {
    const updatedPokedex = [...pokedex]
    const index = updatedPokedex.indexOf(id)
    updatedPokedex.splice(index,1)
    setPokedex(updatedPokedex)
  }

  return (
    <div>
      <GlobaStyle/>
      <Router  
        pokedex={pokedex}
        setPokedex={setPokedex}
        deletePokemonFromPokedex={deletePokemonFromPokedex}/>
    </div>
  );
};

export default App;
