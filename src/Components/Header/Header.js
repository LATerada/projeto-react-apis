import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../Router/coordinator";

const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    let { id } = useParams();
    let pokedex = props.pokedex
    let element = {name: id}
    console.log( pokedex.some(pokedex => pokedex.name === element.name))

    return(
        <HeaderContainer>
            {location.pathname === "/pokedex" || location.pathname === `/detail/${id}` ? <PokemonListButton onClick={()=> goToPokemonListPage(navigate)} >All Pokémons</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {location.pathname === "/" ? <PokedexButton onClick={() => goToPokedexPage(navigate)} >Pokedéx</PokedexButton> : "" }
            {location.pathname === `/detail/${id}` ? <DeleteFromPokedexButton onClick={() => props.deletePokemonFromPokedex(id)} >Delete from Pokedéx</DeleteFromPokedexButton> : <button></button>}
        </HeaderContainer>
    )
}

export default Header;