import { AddToPokedexButton, CardContainer, DeleteFromPokedexButton, DetailButton, PokemonName } from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { GoToDetailPage } from "../../Router/coordinator";

const PokemonCard = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <CardContainer>
            <PokemonName>{props.pokemon.name}</PokemonName>
            <DetailButton onClick={() => GoToDetailPage( navigate, "id")} >Details</DetailButton>
            {location.pathname === "/" ? <AddToPokedexButton onClick={() => props.addPokemonToPokedex(props.pokemon)}>Add to Pokédex</AddToPokedexButton> : ""}
            {location.pathname === "/pokedex" ? <DeleteFromPokedexButton onClick={()=> props.deletePokemonFromPokedex(props.pokemon)} >Delete from Pokédex</DeleteFromPokedexButton> : ""}
        </CardContainer>
    )
};

export default PokemonCard;