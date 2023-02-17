import { HeaderContainer, PokedexButton, PokemonTitle } from "./HeaderStyle";

const Header = () => {
    return(
        <HeaderContainer>
            <PokemonTitle>Pokémon</PokemonTitle>
            <PokedexButton>Pokedex</PokedexButton>
        </HeaderContainer>
    )
}

export default Header;