import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

const PokemonListPage = (props) => {

    const addPokemonToPokedex = (pokemon) => {
        const updatedPokedex = [...props.pokedex, pokemon]
        props.setPokedex(updatedPokedex)

        const updatedPokemonList = [...props.pokemonList]
        const index = updatedPokemonList.indexOf(pokemon)
        console.log(index)
        updatedPokemonList.splice(index,1)
        console.log(updatedPokemonList)
        props.setPokemonList(updatedPokemonList)
        console.log(props.pokedex, props.pokemonList)
    }
    
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
                <CardDisplayContainer>
                    {props.pokemonList.map((pokemon) => {
                        return(
                            <PokemonCard key={pokemon.name}
                            addPokemonToPokedex={addPokemonToPokedex}
                            pokemon={pokemon}
                            />
                        )
                    })}
               
                </CardDisplayContainer>
            </PageDisplayContainer>

        </PageContainer>
    )
}

export default PokemonListPage