import { useState } from "react";
import { createGlobalStyle } from "styled-components"
// import PokedexPage from "./Pages/PokedexPage/PokedexPage";
// import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
// import PokemonListPage from "./Pages/PokemonsListPage/PokemonListPage";
import { Router } from "./Router/Router";

const GlobaStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  // const [screen, setScreen] = useState(1);
  const [pokedex,setPokedex] = useState(["pika","Charmander","Bullbasar"])

  // const changeScreen = (value) => {
  //   setScreen(value)
  // }

  const deletePokemonFromPokedex = (index) => {
    const updatedPokedex = [...pokedex]
    updatedPokedex.splice(index,1)
    setPokedex(updatedPokedex)
  }

  // const renderScreen = () => {
  //     switch (screen) {
  //       case 1:
  //         return <PokemonListPage
  //                   screen={screen} 
  //                   pokedex={pokedex}
  //                   setPokedex={setPokedex}
  //                   changeScreen={changeScreen}
  //                   />;
  //       case 2:
  //         return <PokedexPage 
  //                   screen={screen} 
  //                   pokedex={pokedex}
  //                   setPokedex={setPokedex}
  //                   changeScreen={changeScreen}
  //                   deletePokemonFromPokedex={deletePokemonFromPokedex}
  //                   />;
  //       case 3:
  //         return <PokemonDetailPage 
  //                   screen={screen}
  //                   pokedex={pokedex}
  //                   setPokedex={setPokedex}
  //                   changeScreen={changeScreen}
  //                   deletePokemonFromPokedex={deletePokemonFromPokedex}/>;
  //       default: 
  //         return "Page not found";
  //     }
  // }

  return (
    <div>
      <GlobaStyle/>
      {/* {renderScreen()} */}
      <Router  
        screen={screen}
        pokedex={pokedex}
        setScreen={setScreen}
        setPokedex={setPokedex}
        deletePokemonFromPokedex={deletePokemonFromPokedex}/>
    </div>
  );
};

export default App;
