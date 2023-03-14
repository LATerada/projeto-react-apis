import { Box, Flex, Text } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"

 const PokedexPage = () => {
    const { pokedex } = useContext(GlobalContext)
    console.log(pokedex)

    return(
        <Box bg='gray' pb='305px'>
            <Text pt='60px' pb='55px' pl='100px' textStyle='caption'>Meus Pokémons</Text>
            <Flex wrap='wrap' justify='center' gap='2rem'>
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
            </Flex>
 
        </Box>
    )
}

export default PokedexPage