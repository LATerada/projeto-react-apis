import { useParams } from "react-router-dom"
import BigPokemonCard from "../components/BigPokemonCard"
import { useRequestData } from "../hooks/useRequesData"
import pokeball from "../assets/poke-shadow2.png"
import { 
    Flex, 
    Image, 
    Text } from "@chakra-ui/react"

const PokemonDetailsPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <Flex 
        position='relative' px='1.563rem' bg='gray' pb={{lg:'5rem',xl:'5.25rem'}} minH={{lg:'90vh',xl:'90vh'}} wrap='wrap' justifyContent='center' alignItems='flex-start'>
            <Text 
            w='full'  pt={{ base: '1.5rem', md: '2rem', lg: '2.5rem', xl: '3rem', '2xl': '3.75rem' }} pb={{ base: '1.5rem', md: '2rem', lg: '2rem', xl: '2.9rem', '2xl': '3.438rem' }}  pl={{ base:'1.5rem',md:'2.5rem'}} textStyle='caption'>Detalhes</Text>
            <Image 
            position='absolute' top='-7rem' w={{lg:'52rem',xl:'50rem', '2xl':'56.813rem'}} src={pokeball}/>
            {isLoading? <p>...carregando...</p> : ""}
            {error ? <p>ERRO!</p> : ""}
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Flex>
    )
}

export default PokemonDetailsPage
