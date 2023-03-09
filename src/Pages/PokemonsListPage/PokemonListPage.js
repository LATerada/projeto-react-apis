import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"
import { PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

const PokemonListPage = () => {
    const context = useContext(GlobalContext)
    const { pokemonList, pokedex } = context
    console.log(pokemonList)

    const filteredPokemonList = () => pokemonList.filter(
        (pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    );

    return(
        <PageContainer>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
                    {filteredPokemonList()
                        .map((pokemon) => {
                            return(
                                <PokemonCard 
                                    key={pokemon.url}
                                    pokemon={pokemon}
                                />
                            )
                        })}
            </PageDisplayContainer>

        </PageContainer>
    )
}

export default PokemonListPage