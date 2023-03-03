import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { GoToPokedexPage, GoToPokemonListPage} from "../../Router/coordinator";

const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    let { id } = useParams();

    return(
        <HeaderContainer>
            {location.pathname === "/pokedex" || location.pathname === "/detail/id" ? <PokemonListButton onClick={()=> GoToPokemonListPage(navigate)} >All Pokémons</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {location.pathname === "/" ? <PokedexButton onClick={() => GoToPokedexPage(navigate)} >Pokedéx</PokedexButton> : "" }
            {location.pathname === "/detail/id" ? <DeleteFromPokedexButton onClick={() => props.deletePokemonFromPokedex(id)} >Delete from Pokedéx</DeleteFromPokedexButton> : ""}
        </HeaderContainer>
    )
}

export default Header;