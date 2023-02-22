import Header from "../../Components/Header/Header"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

export const PokemonListPage = (props) => {
    return(
        <div>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
            <p>Pokemon List Page</p>
            <PokemonCard/>
        </div>
    )
}