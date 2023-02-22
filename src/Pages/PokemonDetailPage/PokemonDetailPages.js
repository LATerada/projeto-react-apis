import Header from "../../Components/Header/Header"

export const PokemonDetailPage = (props) => {
    return(
        <div>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
            <p>Pokemon Detail Page</p>
        </div>
    )
}