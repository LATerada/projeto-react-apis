import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, ListPageContainer, Title } from "./PokemonListStyle"

export const PokemonListPage = (props) => {
    return(
        <ListPageContainer>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
            <Title>Pokemon List Page</Title>
            <CardDisplayContainer>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
            </CardDisplayContainer>
        </ListPageContainer>
    )
}