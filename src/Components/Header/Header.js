import { DeleteFromPokemonListButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";

const Header = (props) => {


    return(
        <HeaderContainer>
            {props.screen === 2 || props.screen === 3 ? <PokemonListButton onClick={()=> props.changeScreen(1)} >back to Pokemon List</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {props.screen === 1 ? <PokedexButton onClick={()=> props.changeScreen(2)} >Pokedex</PokedexButton> : "" }
            {props.screen === 3 ? <DeleteFromPokemonListButton>Delete Pokemon</DeleteFromPokemonListButton> : ""}
        </HeaderContainer>

    )
}

export default Header;