import axios from "axios";
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
  const [pokemonList,setPokemonList] = useState([])
  const [pokedex,setPokedex] = useState([])

  axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
        // console.log(response.data.results)
        setPokemonList(response.data.results)
    })
    .catch((error) => {
      console.log(error.response.data)
    })

  const deletePokemonFromPokedex = (id) => {
    const updatedPokedex = [...pokedex]
    const index = updatedPokedex.indexOf(id)
    updatedPokedex.splice(index,1)
    setPokedex(updatedPokedex)
    console.log(pokedex)
  }

  return (
    <div>
      <GlobaStyle/>
      <Router
        pokemonList={pokemonList}
        pokedex={pokedex}
        setPokemonList={setPokemonList}
        setPokedex={setPokedex}
        deletePokemonFromPokedex={deletePokemonFromPokedex}/>
    </div>
  );
};

export default App;
