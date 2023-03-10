import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../router/coordinator";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
    const { pokedex, isLoaded, addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.pathname.slice(8)


    const fetchPokemon = (pathnamedPokemon) => {
        const pokemon = pokedex.find((pokemonInPokedex) => pokemonInPokedex["name"] === pathnamedPokemon)
        return pokemon
    }
    
    useEffect(() => {
        console.log({pokedex, name})
    },[pokedex,name])


    return(
        <header>
            {isLoaded ? 
            <>
                {location.pathname === "/pokedex" || location.pathname === `/detail/${name}` ? 
                <button onClick={()=> goToPokemonListPage(navigate)} >All Pokémons</button> 
                : ""}
                <h1>Pokémon</h1>
                {location.pathname === "/" ? 
                    <button onClick={() => goToPokedexPage(navigate)} >Pokedéx</button> 
                : "" }
                {location.pathname === `/detail/${name}` ?
                    fetchPokemon(name) ? 
                        <button onClick={() => deletePokemonFromPokedex(fetchPokemon(name))} >Delete from Pokedéx</button> 
                    : <button onClick={() => addPokemonToPokedex(fetchPokemon(name))} >Add to Pokedex</button> 
                : ""}
            </> 
            : ""}
       
        </header>
    )
}

export default Header;