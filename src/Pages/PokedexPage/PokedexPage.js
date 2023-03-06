import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

 const PokedexPage = (props) => {
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokedex Page</Title>
                    {props.pokedex.map((pokemon) => {
                        return(
                            <PokemonCard 
                                key={pokemon.url}
                                deletePokemonFromPokedex={props.deletePokemonFromPokedex}
                                pokemon={pokemon}
                            />
                        )
                    })}
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokedexPage