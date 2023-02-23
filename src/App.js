import { useState } from "react";
import { createGlobalStyle } from "styled-components"
import { PokedexPage } from "./Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "./Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonListPage } from "./Pages/PokemonsListPage/PokemonListPage";

const GlobaStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  const [screen, setScreen] = useState(3);

  const changeScreen = (value) => {
    setScreen(value)
  }

  const renderScreen = () => {
      switch (screen) {
        case 1:
          return <PokemonListPage screen={screen} changeScreen={changeScreen}/>;
        case 2:
          return <PokedexPage screen={screen} changeScreen={changeScreen}/>;
        case 3:
          return <PokemonDetailPage screen={screen} changeScreen={changeScreen}/>;
        default: 
          return "Page not found";
      }
  }

  return (
    <div>
      <GlobaStyle/>
      {renderScreen()}
    </div>
  );
};

export default App;
