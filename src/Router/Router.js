import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import { useEffect, useState } from "react"
import axios from "axios"

export const Router = () => {
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
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    index 
                    element={ <PokemonListPage
                        pokemonList={pokemonList}                   
                        pokedex={pokedex}
                        setPokemonList={setPokemonList}
                        setPokedex={setPokedex}/>
                        }>
                </Route>
                <Route 
                    path="/pokedex" 
                    element={ <PokedexPage
                        pokedex={pokedex}
                        setPokedex={setPokedex}
                        deletePokemonFromPokedex={deletePokemonFromPokedex}/> 
                        }>
                </Route>
                <Route 
                    path="/detail/:id" 
                    element={ <PokemonDetailPage
                        pokedex={pokedex}
                        setPokedex={setPokedex}
                        deletePokemonFromPokedex={deletePokemonFromPokedex}/> 
                        }>
                </Route>
                <Route 
                    path="*"
                    element={ <ErrorPage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
