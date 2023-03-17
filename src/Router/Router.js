import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import PokemonListPage from "../pages/PokemonListPage";
import PokedexPage from "../pages/PokedexPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />}></Route>
        <Route path="/pokedex" element={<PokedexPage />}></Route>
        <Route path="/details/:id" element={<PokemonDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
