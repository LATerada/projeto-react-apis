import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

 const PokedexPage = (props) => {
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokedex Page</Title>
                    {props.pokedex.map((pokemon) => {
                        return(
                            <CardDisplayContainer>
                                <PokemonCard key={pokemon.name}
                                deletePokemonFromPokedex={props.deletePokemonFromPokedex}
                                pokemon={pokemon}/>
                            </CardDisplayContainer>
                        )
                    })}
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokedexPage