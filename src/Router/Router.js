import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import PokemonListPage from "../pages/PokemonsListPage/PokemonListPage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route 
                    index 
                    element={ <PokemonListPage/> }>
                </Route>
                <Route 
                    path="/pokedex" 
                    element={ <PokedexPage/> }>
                </Route>
                <Route 
                    path="/detail/:id" 
                    element={ <PokemonDetailPage/> }>
                </Route>
                <Route 
                    path="*"
                    element={ <ErrorPage/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}
