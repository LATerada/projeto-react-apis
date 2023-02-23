import { DeleteFromPokedexButton, HeaderContainer, PokedexButton, PokemonListButton, PokemonTitle } from "./HeaderStyle";

const Header = (props) => {
    return(
        <HeaderContainer>
            {props.screen === 2 || props.screen === 3 ? <PokemonListButton onClick={()=> props.changeScreen(1)} >All Pokémons</PokemonListButton> : ""}
            <PokemonTitle>Pokémon</PokemonTitle>
            {props.screen === 1 ? <PokedexButton onClick={()=> props.changeScreen(2)} >Pokedéx</PokedexButton> : "" }
            {props.screen === 3 ? <DeleteFromPokedexButton onClick={() => props.deletePokemonFromPokedex(1)}>Delete from Pokedéx</DeleteFromPokedexButton> : ""}
        </HeaderContainer>
    )
}

export default Header;