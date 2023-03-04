import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardContainer, PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

 const PokedexPage = (props) => {
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokedex Page</Title>
                    {props.pokedex.map((pokemon) => {
                        return(
                            <CardContainer key={pokemon.url}>
                                <PokemonCard 
                                deletePokemonFromPokedex={props.deletePokemonFromPokedex}
                                pokemon={pokemon}/>
                            </CardContainer>
                        )
                    })}
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokedexPage