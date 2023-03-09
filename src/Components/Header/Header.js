import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { AddToPokedexButton } from "../PokemonCard/PokemonCardStyle";

const Header = () => {
    const context = useContext(GlobalContext)
    const { pokedex, addPokemonToPokedex, deletePokemonFromPokedex } = context
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.pathname.slice(8)
    console.log(name)

    const showAddButton = (detailedPokemon) => {
        const isAlreadyInPokedex = pokedex.find((pokemonInPokedex) => 
        pokemonInPokedex.name === detailedPokemon
        )
        if(isAlreadyInPokedex){
            return true
        }
        return false
    } 
    // const pokemon = pokedex.find((pokemon) => pokemon.name === pathnamedPokemon)}
    //     console.log(pokemon)


    return(
        <HeaderContainer>
            {location.pathname === "/pokedex" || location.pathname === `/detail/${name}` ? <PokemonListButton onClick={()=> goToPokemonListPage(navigate)} >All Pokémons</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {location.pathname === "/" ? <PokedexButton onClick={() => goToPokedexPage(navigate)} >Pokedéx</PokedexButton> : "" }
            {location.pathname === `/detail/${name}` ? showAddButton(name) ? <DeleteFromPokedexButton onClick={() => deletePokemonFromPokedex(name)} >Delete from Pokedéx</DeleteFromPokedexButton> : <AddToPokedexButton onClick={() => addPokemonToPokedex(name)} >Add to Pokedex</AddToPokedexButton> : ""}
        </HeaderContainer>
    )
}

export default Header;