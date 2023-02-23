import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "./PokemonListStyle"

export const PokemonListPage = (props) => {
    return(
        <PageContainer>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
            <PageDisplayContainer>
                <Title>Pokemon List Page</Title>
                <CardDisplayContainer>
                    <PokemonCard/>
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