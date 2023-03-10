import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"

 const PokedexPage = () => {
    const { pokedex } = useContext(GlobalContext)
    console.log(pokedex)

    return(
        <Box bg='gray'>
            <main>
                <h1>Pokedex Page</h1>
                    {pokedex
                        .map((pokemon) => {
                            return(
                                <PokemonCard 
                                    key={pokemon.url}
                                    pokemon={pokemon}
                                />
                            )
                        })}
            </main>
        </Box>
    )
}

export default PokedexPage