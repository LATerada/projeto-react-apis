import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

const PokemonListPage = (props) => {

    const addPokemonToPokedex = (pokemon) => {
        const updatedPokedex = [...props.pokedex, pokemon]
        props.setPokedex(updatedPokedex)
        console.log(props.pokedex)
    }
    
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
                <CardDisplayContainer>
                    <PokemonCard 
                        addPokemonToPokedex={addPokemonToPokedex}
                        />
                </CardDisplayContainer>
            </PageDisplayContainer>

        </PageContainer>
    )
}

export default PokemonListPage