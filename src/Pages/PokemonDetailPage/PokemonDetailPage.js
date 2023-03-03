import Header from "../../Components/Header/Header"
import { PokemonName } from "../../Components/PokemonCard/PokemonCardStyle"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"
import { BigCardContainer } from "./PokemonDetailStyle"

const PokemonDetailPage = (props) => {
    return(
        <PageContainer>
            <Header 
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

export default PokemonDetailPage