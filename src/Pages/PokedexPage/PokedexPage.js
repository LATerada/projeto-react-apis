import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { CardDisplayContainer, PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

 const PokedexPage = (props) => {
    return(
        <PageContainer>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
            <PageDisplayContainer>
                <Title>Pokedex Page</Title>
                <CardDisplayContainer>
                    <PokemonCard 
                        screen={props.screen}
                        setScreen={props.setScreen}
                        deletePokemonFromPokedex={props.deletePokemonFromPokedex}/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                </CardDisplayContainer>
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokedexPage