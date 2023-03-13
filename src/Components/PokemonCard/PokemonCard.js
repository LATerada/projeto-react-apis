import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useRequestData } from "../../hooks/useRequesData";
import { Box, Button } from "@chakra-ui/react";

const PokemonCard = (props) => {
    const { addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${props.pokemon.name}`)
    
    return(
        <Box>
            {isLoaded ?  <>
                <p>{pokemon.name}</p>
                <img width="100px" src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
                <Button onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Detalhes</Button>
                {location.pathname === "/" ?
                    <Button onClick={() => addPokemonToPokedex(props.pokemon)}>Capturar!</Button> 
                : ""}
                {location.pathname === "/pokedex" ?
                    <Button onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Excluir</Button>
                : ""}
            </> : ""}
        </Box>
    )
};

export default PokemonCard;