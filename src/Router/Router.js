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
                                            pokedex={props.pokedex}
                                            setPokedex={props.setPokedex}/> 
                                    }>
                </Route>
                <Route path="/pokedex" element={ <PokedexPage
                                                    pokedex={props.pokedex}
                                                    setPokedex={props.setPokedex}
                                                    deletePokemonFromPokedex={props.deletePokemonFromPokedex}/> 
                                                }>
                </Route>
                <Route path="/detail/:id" element={ <PokemonDetailPage
                                                        pokedex={props.pokedex}
                                                        setPokedex={props.setPokedex}
                                                        deletePokemonFromPokedex={props.deletePokemonFromPokedex}/> 
                                                    }>
                </Route>
                <Route path="*" element={ <ErrorPage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
