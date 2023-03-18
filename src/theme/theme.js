import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { color } from "./color";
import { components } from "./components";
import { textStyles } from "./textStyles";

const theme = extendTheme({
  breakpoints,
  color,
  components,
  textStyles,
});
export default theme;
