import axios from "axios";
import { useEffect, useState } from "react";
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

  const deletePokemonFromPokedex = (pokemon) => {
    const updatedPokedex = [...pokedex]
    const index = updatedPokedex.indexOf(pokemon)
    updatedPokedex.splice(index,1)
    setPokedex(updatedPokedex)

    const updatedPokemonList = [...pokemonList,pokemon]
    setPokemonList(updatedPokemonList)
  }

  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
        setPokemonList(response.data.results)
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  },[])

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
