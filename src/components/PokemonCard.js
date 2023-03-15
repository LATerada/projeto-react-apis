import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../router/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useRequestData } from "../hooks/useRequesData";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { cardColor } from "../utils/cardColor";
import pokeball from '../assets/poke-shadow.png'
import { pokemonType } from "../utils/pokemonTypes";

const PokemonCard = (props) => {
    const { addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${props.pokemon.name}`)

    return(
        <>
          {isLoaded ?  
                <Box position='relative' w='27.5rem' h='13.125rem' bg={cardColor(pokemon.types[0].type.name)} borderRadius='0.75rem'>
                    <Text textStyle={'h2'}>{pokemon.id < 10 ? `#0${pokemon.id}`: `#${pokemon.id}`}</Text>
                    <Text textStyle={'h1'} >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                    <Image zIndex='1' position='absolute' right='0.688rem' top='-3.313rem' width='200px' src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
                    <Image position='absolute' right='0' top='0' src={pokeball} />
                    <Flex pl='1.438rem' pt='0.625rem' columnGap='0.438rem'>
                        <Image h='1.931rem' src={pokemonType(pokemon.types[0].type.name)} />
                        {pokemon.types.length > 1 ?  <Image h='1.931rem' src={pokemonType(pokemon.types[1].type.name)}/> : ""}
                    </Flex>
                    <Button variant={'details'} onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Detalhes</Button>
                    {location.pathname === "/" ?
                        <Button variant={'captureCard'} onClick={() => addPokemonToPokedex(props.pokemon)}>Capturar!</Button> 
                    : ""}
                    {location.pathname === "/pokedex" ?
                        <Button variant={'deleteCard'} onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Excluir</Button>
                    : ""}
                </Box>
            : ""}
        </>
    )
};

export default PokemonCard;