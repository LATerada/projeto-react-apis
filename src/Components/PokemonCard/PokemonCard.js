import { AddToPokedexButton, CardContainer, DeleteFromPokedexButton, DetailButton, PokemonName } from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const PokemonCard = (props) => {
    const context = useContext(GlobalContext)
    const { addPokemonToPokedex, deletePokemonFromPokedex } = context
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <CardContainer>
            <PokemonName>{props.pokemon.name}</PokemonName>
            <DetailButton onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Details</DetailButton>
            {location.pathname === "/" ? <AddToPokedexButton onClick={() => addPokemonToPokedex(props.pokemon)}>Add to Pokédex</AddToPokedexButton> : ""}
            {location.pathname === "/pokedex" ? <DeleteFromPokedexButton onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Delete from Pokédex</DeleteFromPokedexButton> : ""}
        </CardContainer>
    )
};

export default PokemonCard;