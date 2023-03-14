import { Box, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BigPokemonCard from "../../components/BigPokemonCard/BigPokemonCard"
import { useRequestData } from "../../hooks/useRequesData"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <Box bg={'gray'}>
            <Text pt='60px' pb='55px' pl='100px' textStyle='caption'>Detalhes</Text>
            {isLoading? <p>...is loading...</p> : ""}
            {error ? <p>ERROR!</p> : ""}
            {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}
        </Box>
    )
}

export default PokemonDetailPage