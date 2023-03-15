import { Box, Grid, Text } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"

 const PokedexPage = () => {
    const { pokedex } = useContext(GlobalContext)

    return(
        <Box bg='gray' pb='305px' minH='675px' >
            <Text pt='60px' pb='55px' pl='40px'  textStyle='caption'>Meus Pokémons</Text>
            <Grid px='40px' templateColumns='repeat(3, 1fr)' justifyItems='center' rowGap='16'>
                {pokedex
                    .map((pokemon) => {
                        return(
                            <PokemonCard 
                                key={pokemon.url}
                                pokemon={pokemon}
                            />
                        )
                    })
                }
            </Grid>
 
        </Box>
    )
}

export default PokedexPage