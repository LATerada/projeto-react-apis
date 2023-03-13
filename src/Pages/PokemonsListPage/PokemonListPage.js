import { Box, Heading } from "@chakra-ui/react"
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
        <Box bg='gray' >
            <Heading color='white'>Todos Pokémons</Heading>
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
        </Box>
    )
}

export default PokemonListPage