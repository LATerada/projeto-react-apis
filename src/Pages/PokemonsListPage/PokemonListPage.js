import { Box, Flex, Text } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"


const PokemonListPage = () => {
    const { pokemonList, pokedex, isLoading, isLoaded, error } = useContext(GlobalContext)

    const filteredPokemonList = () => pokemonList.filter(
        (pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    );
    // console.log(pokemonList)

    return(
        <Box bg='gray' pb='305px' >
            <Text pt='60px' pb='55px' pl='100px' textStyle='caption'>Todos Pokémons</Text>
            <Flex wrap='wrap' justify='center' gap='2rem'>
                {error ? <p>ERRO!</p> : ""}
                {isLoading ? <p>carregando...</p> : ""}
                {isLoaded ? filteredPokemonList().map((pokemon) => {
                            return(
                                <PokemonCard 
                                    key={pokemon.url}
                                    pokemon={pokemon}
                                />
                            )
                        }
                    ) : ""
                }
            </Flex>    
        </Box>
    )
}

export default PokemonListPage