import { AddToPokedexButton, CardContainer, DeleteFromPokedexButton, DetailButton, PokemonName } from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { GoToDetailPage } from "../../Router/coordinator";

const PokemonCard = (props) => {
    const navigate = useNavigate()

    return(
        <CardContainer>
            <PokemonName>Pokemon Name</PokemonName>
            <DetailButton onClick={() => GoToDetailPage( navigate, "id", props.setScreen)} >Details</DetailButton>
            {props.screen === 1 ? <AddToPokedexButton onClick={() => props.addPokemonToPokedex("Clicked Pokemon")}>Add to Pokédex</AddToPokedexButton> : ""}
            {props.screen === 2 ? <DeleteFromPokedexButton onClick={()=> props.deletePokemonFromPokedex(1)} >Delete from Pokédex</DeleteFromPokedexButton> : ""}
        </CardContainer>
    )
};

export default PokemonCard;