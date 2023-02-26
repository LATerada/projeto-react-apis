import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { GoToPokemonListPage, GoToPokedexPage} from "../../Router/coordinator";

const Header = (props) => {
    const navigate = useNavigate();

    return(
        <HeaderContainer>
            {props.screen === 2 || props.screen === 3 ? <PokemonListButton onClick={()=> GoToPokemonListPage(navigate, props.setScreen)} >All Pokémons</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {props.screen === 1 ? <PokedexButton onClick={()=> GoToPokedexPage(navigate,props.setScreen)} >Pokedéx</PokedexButton> : "" }
            {props.screen === 3 ? <DeleteFromPokedexButton onClick={() => props.deletePokemonFromPokedex(0)}>Delete from Pokedéx</DeleteFromPokedexButton> : ""}
        </HeaderContainer>
    )
}

export default Header;