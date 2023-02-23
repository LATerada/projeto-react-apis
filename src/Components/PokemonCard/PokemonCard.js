import { AddToPokedexButton, CardContainer, DetailButton, PokemonName } from "./PokemonCardStyle";

const PokemonCard = () => {
    return(
        <CardContainer>
            <PokemonName>Pokemon Name</PokemonName>
            <DetailButton>Details</DetailButton>
            <AddToPokedexButton>Add to Pokedex</AddToPokedexButton>
        </CardContainer>
    )
};

export default PokemonCard;