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
        <div>
            {isLoaded ?  <>
                <p>{pokemon.name}</p>
                <img width="100px" src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
                <button onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Details</button>
                {location.pathname === "/" ?
                    <button onClick={() => addPokemonToPokedex(props.pokemon)}>Add to Pokédex</button> 
                : ""}
                {location.pathname === "/pokedex" ?
                    <button onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Delete from Pokédex</button>
                : ""}
            </> : ""}
        </div>
    )
};

export default PokemonCard;