import { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GlobalContext } from "../../contexts/GlobalContext"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

 const PokedexPage = () => {
    const { pokedex } = useContext(GlobalContext)
    console.log(pokedex)

    return(
        <PageContainer>
            <PageDisplayContainer>
                <Title>Pokedex Page</Title>
                    {pokedex
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

export default PokedexPage