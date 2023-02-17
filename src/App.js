import { createGlobalStyle } from "styled-components"
import { PokemonListPage } from "./Pages/PokemonsListPage/PokemonListPage";

const GlobaStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div>
      <GlobaStyle/>
      <PokemonListPage/>
    </div>
  );
};

export default App;
