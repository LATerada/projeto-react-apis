import { AddToPokedexButton, CardContainer, DeleteFromPokedexButton, DetailButton, PokemonName } from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useRequestData } from "../../hooks/useRequesData";

const PokemonCard = (props) => {
    const context = useContext(GlobalContext)
    const { addPokemonToPokedex, deletePokemonFromPokedex } = context
    const navigate = useNavigate()
    const location = useLocation()

    const [ pokemon, isLoading, error ] = useRequestData({}, `/${props.pokemon.name}`)

    useEffect(()=> {
        // console.log(pokemon.sprites.other["official-artwork"].front_default)
    },[])

    return(
        <CardContainer>
            <PokemonName>{pokemon.name}</PokemonName>
            {/* <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/> */}
            <DetailButton onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Details</DetailButton>
            {location.pathname === "/" ? <AddToPokedexButton onClick={() => addPokemonToPokedex(props.pokemon)}>Add to Pokédex</AddToPokedexButton> : ""}
            {location.pathname === "/pokedex" ? <DeleteFromPokedexButton onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Delete from Pokédex</DeleteFromPokedexButton> : ""}
        </CardContainer>
    )
};

export default PokemonCard;