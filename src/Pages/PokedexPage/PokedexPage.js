import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

 const PokedexPage = ({ pokedex, deletePokemonFromPokedex}) => {
    console.log(pokedex)

    return(
        <PageContainer>
            {/* <Header/> */}
            <PageDisplayContainer>
                <Title>Pokedex Page</Title>
                    {pokedex
                        .map((pokemon) => {
                            return(
                                <PokemonCard 
                                    key={pokemon.url}
                                    deletePokemonFromPokedex={deletePokemonFromPokedex}
                                    pokemon={pokemon}
                                />
                            )
                        })}
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokedexPage