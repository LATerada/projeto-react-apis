import { AddToPokedexButton, CardContainer, DeleteFromPokedexButton, DetailButton, PokemonName } from "./PokemonCardStyle";

const PokemonCard = (props) => {
    return(
        <CardContainer>
            <PokemonName>Pokemon Name</PokemonName>
            <DetailButton onClick={() => props.changeScreen(3)} >Details</DetailButton>
            {props.screen === 1 ? <AddToPokedexButton onClick={() => props.addPokemonToPokedex("Clicked Pokemon")}>Add to Pokédex</AddToPokedexButton> : ""}
            {props.screen === 2 ? <DeleteFromPokedexButton onClick={()=> props.deletePokemonFromPokedex(1)} >Delete from Pokédex</DeleteFromPokedexButton> : ""}
        </CardContainer>
    )
};

export default PokemonCard;