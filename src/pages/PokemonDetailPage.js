import { useParams } from "react-router-dom"
import BigPokemonCard from "../components/BigPokemonCard"
import { useRequestData } from "../hooks/useRequesData"
import pokeball from "../assets/poke-shadow2.png"
import { 
    Flex, 
    Image, 
    Text } from "@chakra-ui/react"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <Flex 
        position='relative' px='1.563rem' bg='gray' pb='11.25rem' minH='90vh' wrap='wrap' justifyContent='center'>
            <Text 
            w='full'  pt={{ sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '3rem', '2xl': '3.75rem' }} pb={{ sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '2.9rem', '2xl': '3.438rem' }}  pl='2.5rem' textStyle='caption'>Detalhes</Text>
            <Image 
            position='absolute' top='-7rem' w={{lg:'50rem', xl:'56.813rem'}} src={pokeball}/>
            {isLoading? <p>...carregando...</p> : ""}
            {error ? <p>ERRO!</p> : ""}
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Flex>
    )
}

export default PokemonDetailPage
