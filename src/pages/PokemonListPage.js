import { Box, Grid, Text } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../components/PokemonCard"
import { GlobalContext } from "../contexts/GlobalContext"


const PokemonListPage = () => {
    const { pokemonList, pokedex, isLoading, isLoaded, error } = useContext(GlobalContext)

    const filteredPokemonList = () => pokemonList.filter(
        (pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    );

    return(
        <Box 
        bg='gray' pb='19.063rem' minH='90vh' >
            <Text 
            pt={{ sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '3rem', '2xl': '3.75rem' }} pb={{ sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '2.9rem', '2xl': '3.438rem' }} pl='2.5rem' textStyle='caption'>Todos Pokémons</Text>
                <Grid 
                px={{md:'1rem',lg:'2.5rem'}} templateColumns='repeat(3, 1fr)' justifyItems='center' rowGap={{md:'14', lg: '14',xl:'16'}}>
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