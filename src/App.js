import { createGlobalStyle } from "styled-components"
import { Router } from "./Router/Router";

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
      <Router/>
    </div>
  );
};

export default App;
