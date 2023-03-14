import { Box, Grid, Text } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"


const PokemonListPage = () => {
    const { pokemonList, pokedex, isLoading, isLoaded, error } = useContext(GlobalContext)

    const filteredPokemonList = () => pokemonList.filter(
        (pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    );
    console.log(pokemonList)

    return(
        <Box bg='gray' pb='305px' minH='675px' >
            <Text pt='60px' pb='55px' pl='40px' textStyle='caption'>Todos Pokémons</Text>
                <Grid px='40px' templateColumns='repeat(3, 1fr)' justifyItems='center' rowGap='16'>
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
                </Grid> 
        </Box>
    )
}

export default PokemonListPage