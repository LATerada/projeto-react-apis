import { Box, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BigPokemonCard from "../../components/BigPokemonCard/BigPokemonCard"
import { useRequestData } from "../../hooks/useRequesData"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <Box bg='gray'>
            <Heading>Detalhes</Heading>
            {isLoading? <p>...is loading...</p> : ""}
            {error ? <p>ERROR!</p> : ""}
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Box>
    )
}

export default PokemonDetailPage