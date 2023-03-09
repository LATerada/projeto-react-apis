import { Router } from "./router/Router";
import { GlobalContext } from "./contexts/GlobalContext"
import { useState } from "react";
import { useRequestData } from "./hooks/useRequesData";

function App() {
  const [pokedex,setPokedex] = useState([])
  const [ pokemonList, isLoading, error ] = useRequestData([], "/")

  const addPokemonToPokedex = (clickedPokemon) => {
    const isAlreadyInPokedex = pokedex.find((pokemonInPokedex) => 
      pokemonInPokedex.name === clickedPokemon.name
    )

    if(!isAlreadyInPokedex){
      const newPokedex = [...pokedex, clickedPokemon]
      setPokedex(newPokedex)
    }
  }

  const deletePokemonFromPokedex = (clickedPokemon) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) =>
      pokemonInPokedex.name !== clickedPokemon.name
    )

    setPokedex(newPokedex)
  }

  const context = {
    pokedex,
    setPokedex,
    pokemonList,
    isLoading,
    error,
    addPokemonToPokedex,
    deletePokemonFromPokedex
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>
  );
};

export default App;
