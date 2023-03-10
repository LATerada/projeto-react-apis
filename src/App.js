import { Router } from "./router/Router";
import GlobalContextProvider from "./contexts/GlobalContext"
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const App = () => {
  return (
    <GlobalContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Router/>
      </ChakraProvider>
    </GlobalContextProvider>
  );
};

export default App;
