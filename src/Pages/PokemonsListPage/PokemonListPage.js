import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardContainer, PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

const PokemonListPage = (props) => {

    const addPokemonToPokedex = (pokemon) => {
        const updatedPokedex = [...props.pokedex, pokemon]
        props.setPokedex(updatedPokedex)

        const updatedPokemonList = [...props.pokemonList]
        const index = updatedPokemonList.indexOf(pokemon)
        updatedPokemonList.splice(index,1)
        props.setPokemonList(updatedPokemonList)
    }
    
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
      
                    {props.pokemonList.map((pokemon) => {
                        return(
                            <CardContainer key={pokemon.url}>
                                <PokemonCard 
                                addPokemonToPokedex={addPokemonToPokedex}
                                pokemon={pokemon}
                                />
                            </CardContainer>
                        )
                    })}
            </PageDisplayContainer>

        </PageContainer>
    )
}

export default PokemonListPage