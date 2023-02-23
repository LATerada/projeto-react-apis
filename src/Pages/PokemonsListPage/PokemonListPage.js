import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

export const PokemonListPage = (props) => {

    const addPokemonToPokedex = (pokemon) => {
        const updatedPokedex = [...props.pokedex, pokemon]
        props.setPokedex(updatedPokedex)
    }
    console.log(props.pokedex)
    
    return(
        <PageContainer>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
                <CardDisplayContainer>
                    <PokemonCard 
                        screen={props.screen}
                        pokedex={props.pokedex}
                        changeScreen={props.changeScreen}
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