import Header from "../../Components/Header/Header"

export const PokedexPage = (props) => {
    return(
        <div>
            <Header screen={props.screen} changeScreen={props.changeScreen}/>
        <p>Pokedex Page</p>
        </div>
    )
}