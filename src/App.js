import { Router } from "./router/Router";
import GlobalContextProvider from "./contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/theme";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/montserrat/400.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalContextProvider>
  );
};

export default App;
