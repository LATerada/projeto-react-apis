import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/coordinator";
import { AddToPokedexButton } from "../PokemonCard/PokemonCardStyle";

const Header = ({pokedex, deletePokemonFromPokedex, addPokemonToPokedex}) => {
    const navigate = useNavigate();
    const location = useLocation();
    let  id  = useParams();
    console.log(location)
    console.log(id)


    // let element = {name: id}
    // console.log(pokedex.some(pokedex => pokedex.name === element.name))

    // const pokemonInPokedex = pokedex && pokedex.find((pokemonInPokedex) => pokemonInPokedex.id === id)
    // console.log(pokemonInPokedex)

    return(
        <HeaderContainer>
            {location.pathname === "/pokedex" || location.pathname === `/detail/${id}` ? <PokemonListButton onClick={()=> goToPokemonListPage(navigate)} >All Pokémons</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {location.pathname === "/" ? <PokedexButton onClick={() => goToPokedexPage(navigate)} >Pokedéx</PokedexButton> : "" }
            {location.pathname === `/detail/${id}` ? <DeleteFromPokedexButton onClick={() => deletePokemonFromPokedex(id)} >Delete from Pokedéx</DeleteFromPokedexButton> : ""}
                 {/* pokedex.includes(id) ? <DeleteFromPokedexButton onClick={() => deletePokemonFromPokedex(id)} >Delete from Pokedéx</DeleteFromPokedexButton> : <AddToPokedexButton onClick={() => addPokemonToPokedex}>Add to</AddToPokedexButton> */}
            
        </HeaderContainer>
    )
}

export default Header;