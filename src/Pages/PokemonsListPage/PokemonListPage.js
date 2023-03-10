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
        <div>
            <main>
                <h1>Pokemon List Page</h1>
                {error ? <p>ERROR!</p> : ""}
                {isLoading ? <p>...is loading...</p> : ""}
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
     
              
            </main>

        </div>
    )
}

export default PokemonListPage