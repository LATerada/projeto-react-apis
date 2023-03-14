import { Box, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BigPokemonCard from "../../components/BigPokemonCard/BigPokemonCard"
import { useRequestData } from "../../hooks/useRequesData"
import pokeball from "../../assets/poke-shadow2.png"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <Box px='1.563rem' bg='gray' pb='180px' minH='675px'>
            <Text pt='60px' pb='55px' textStyle='caption'>Detalhes</Text>
            {isLoading? <p>...carregando...</p> : ""}
            {error ? <p>ERRO!</p> : ""}
            <Image position='absolute' top='10rem' left='12rem' w='56.813rem' h='56.813rem' src={pokeball}/>
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Box>
    )
}

export default PokemonDetailPage