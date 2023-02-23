import Header from "../../Components/Header/Header"
import { PokemonName } from "../../Components/PokemonCard/PokemonCardStyle"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"
import { BigCardContainer } from "./PokemonDetailStyle"

export const PokemonDetailPage = (props) => {
    return(
        <PageContainer>
            <Header 
                screen={props.screen}
                changeScreen={props.changeScreen}
                deletePokemonFromPokedex={props.deletePokemonFromPokedex}/>
            <PageDisplayContainer>
                <Title>Pokemon Detail Page</Title>
                <BigCardContainer>
                    <PokemonName></PokemonName>
                </BigCardContainer>
            </PageDisplayContainer>
        </PageContainer>
    )
}