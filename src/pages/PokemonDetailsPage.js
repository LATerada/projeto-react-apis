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
        position='relative' px='1.563rem' bg='gray' pb={{sm:'5.25rem'}} minH={{sm:'75vh',md:'60vh',xl:'90vh'}} wrap='wrap' justifyContent='center' alignItems='flex-start'>
            <Text 
            w='full'  pt={{ base: '2rem', md:'2.5rem', xl: '3rem', '2xl': '3.75rem' }} pb={{ base: '2rem', md: '3rem', '2xl': '3.438rem' }}  pl={{ base:'1.5rem',md:'2.5rem'}} textStyle='caption'>Detalhes</Text>
            <Image 
            position='absolute' top='-7rem' w={{md:'52rem',xl:'50rem', '2xl':'56.813rem'}} src={pokeball}/>
            {isLoading? <p>...carregando...</p> : ""}
            {error ? <p>ERRO!</p> : ""}
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Flex>
    )
}

export default PokemonDetailsPage
