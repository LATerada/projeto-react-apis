import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"
import { PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

const PokemonListPage = () => {
    const { pokemonList, pokedex, isLoading, isLoaded, error } = useContext(GlobalContext)

    const filteredPokemonList = () => pokemonList.filter(
        (pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    );
    // console.log(pokemonList)

    return(
        <PageContainer>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
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
     
              
            </PageDisplayContainer>

        </PageContainer>
    )
}

export default PokemonListPage