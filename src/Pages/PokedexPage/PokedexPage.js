import { Box, Grid, Text } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"

 const PokedexPage = () => {
    const { pokedex } = useContext(GlobalContext)
    console.log(pokedex)

    return(
        <Box bg='gray' pb='305px' flex justify='center'>
            <Text pt='60px' pb='55px' pl='100px' textStyle='caption'>Meus Pokémons</Text>
            <Grid px='40' templateColumns='repeat(3, 1fr)' justifyItems='center' rowGap='16'>
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