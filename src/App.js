import { Router } from "./router/Router";
import GlobalContextProvider from "./contexts/GlobalContext"

function App() {
  return (
    <GlobalContextProvider>
      <Router/>
    </GlobalContextProvider>
  );
};

export default App;
