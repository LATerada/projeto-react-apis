import { Flex, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BigPokemonCard from "../components/BigPokemonCard"
import { useRequestData } from "../hooks/useRequesData"
import pokeball from "../assets/poke-shadow2.png"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <Flex position='relative' px='1.563rem' bg='gray' pb='180px' minH='675px' wrap='wrap' justifyContent='center'>
            <Text w='full' pt='60px' pb='55px' textStyle='caption'>Detalhes</Text>
            <Image position='absolute' top='-7rem' w='56.813rem' src={pokeball}/>
            {isLoading? <p>...carregando...</p> : ""}
            {error ? <p>ERRO!</p> : ""}
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Flex>
    )
}

export default PokemonDetailPage
