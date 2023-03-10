import { AddToPokedexButton, CardContainer, DeleteFromPokedexButton, DetailButton, PokemonName } from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useRequestData } from "../../hooks/useRequesData";

const PokemonCard = (props) => {
    const { addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${props.pokemon.name}`)
    
    return(
        <CardContainer>
            {isLoaded ?  <>
                <PokemonName>{pokemon.name}</PokemonName>
                <img width="100px" src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
                <DetailButton onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Details</DetailButton>
                {location.pathname === "/" ?
                    <AddToPokedexButton onClick={() => addPokemonToPokedex(props.pokemon)}>Add to Pokédex</AddToPokedexButton> 
                : ""}
                {location.pathname === "/pokedex" ?
                    <DeleteFromPokedexButton onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Delete from Pokédex</DeleteFromPokedexButton>
                : ""}
            </> : ""}
        </CardContainer>
    )
};

export default PokemonCard;