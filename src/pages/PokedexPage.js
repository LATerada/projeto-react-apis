import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import PokemonCard from "../components/PokemonCard";
import { Box, Grid, Text } from "@chakra-ui/react";

const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext);

  return (
    <Box bg="gray" pb="19.063rem" minH="90vh">
      <Text
        pt={{
          base: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          "2xl": "3.75rem",
        }}
        pb={{
          base: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "2.9rem",
          "2xl": "3.438rem",
        }}
        pl={{ base: "1.5rem", md: "2.5rem" }}
        textStyle="caption"
      >
        Meus Pokémons
      </Text>
      <Grid
        px={{ base: "1rem", lg: "2.5rem" }}
        templateColumns={{ md: "repeat(3, 1fr)" }}
        justifyItems="center"
        rowGap={{ base: "14", xl: "16" }}
      >
        {pokedex.map((pokemon) => {
          return <PokemonCard key={pokemon.url} pokemon={pokemon} />;
        })}
      </Grid>
    </Box>
  );
};

export default PokedexPage;
