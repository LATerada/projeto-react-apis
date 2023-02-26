import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"

export const Router = (props) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <PokemonListPage                      
                                            screen={props.screen}
                                            pokedex={props.pokedex}
                                            setScreen={props.setScreen}
                                            setPokedex={props.setPokedex}
                                            deletePokemonFromPokedex={props.deletePokemonFromPokedex}/> 
                                    }>
                </Route>
                <Route path="/pokedex" element={ <PokedexPage
                                                    screen={props.screen}
                                                    pokedex={props.pokedex}
                                                    setScreen={props.setScreen}
                                                    setPokedex={props.setPokedex}
                                                    deletePokemonFromPokedex={props.deletePokemonFromPokedex}/> 
                                                }>
                </Route>
                <Route path="/detail/:id" element={ <PokemonDetailPage
                                                        screen={props.screen}
                                                        pokedex={props.pokedex}
                                                        setScreen={props.setScreen}
                                                        setPokedex={props.setPokedex}
                                                        deletePokemonFromPokedex={props.deletePokemonFromPokedex}/> 
                                                    }>
                </Route>
                <Route path="*" element={ <ErrorPage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
