import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
    const { pokedex, addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.pathname.slice(8)

    const fetchPokemon = (pathnamedPokemon) => {
        const pokemon = pokedex.find((pokemon) => pokemon.name === pathnamedPokemon)
        return pokemon
    }

    return(
        <HeaderContainer>
            {location.pathname === "/pokedex" || location.pathname === `/detail/${name}` ? 
                <PokemonListButton onClick={()=> goToPokemonListPage(navigate)} >All Pokémons</PokemonListButton> 
            : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {location.pathname === "/" ? 
                <PokedexButton onClick={() => goToPokedexPage(navigate)} >Pokedéx</PokedexButton> 
            : "" }
            {location.pathname === `/detail/${name}` ?
                fetchPokemon(name) ? 
                    <DeleteFromPokedexButton onClick={() => deletePokemonFromPokedex(fetchPokemon(name))} >Delete from Pokedéx</DeleteFromPokedexButton> 
                : <button onClick={() => addPokemonToPokedex(fetchPokemon(name))} >Add to Pokedex</button> 
            : ""}
        </HeaderContainer>
    )
}

export default Header;