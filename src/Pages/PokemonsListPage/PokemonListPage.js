import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

const PokemonListPage = (props) => {

    const addPokemonToPokedex = (pokemon) => {
        const updatedPokedex = [...props.pokedex, pokemon]
        props.setPokedex(updatedPokedex)
    }
    
    return(
        <PageContainer>
            <Header/>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
                <CardDisplayContainer>
                    <PokemonCard 
                        addPokemonToPokedex={() => addPokemonToPokedex("pikachu")}
                        />
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                </CardDisplayContainer>
            </PageDisplayContainer>

        </PageContainer>
    )
}

export default PokemonListPage