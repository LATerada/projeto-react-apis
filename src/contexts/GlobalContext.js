import { createContext, useState } from "react";
import { useRequestData } from "../hooks/useRequesData";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemonList, isLoading, isLoaded, error] = useRequestData(
    [],
    "/?limit=30"
  );

  const addPokemonToPokedex = (clickedPokemon) => {
    const isAlreadyInPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex["name"] === clickedPokemon.name
    );

    if (!isAlreadyInPokedex) {
      const newPokedex = [...pokedex, clickedPokemon];
      setPokedex(newPokedex);
    }
  };

  const deletePokemonFromPokedex = (clickedPokemon) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex["name"] !== clickedPokemon.name
    );
    setPokedex(newPokedex);
  };

  return (
    <GlobalContext.Provider
      value={{
        pokedex,
        pokemonList,
        isLoading,
        isLoaded,
        error,
        addPokemonToPokedex,
        deletePokemonFromPokedex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
