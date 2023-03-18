import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { goToPokedexPage, goToPokemonListPage } from "../router/coordinator";
import logo from "../assets/logo.png";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import DeleteModal from "./DeleteModal";
import CaptureModal from "./CaptureModal";
import { Button, Grid, GridItem, useDisclosure } from "@chakra-ui/react";

const Header = () => {
  const {
    pokedex,
    pokemonList,
    isLoaded,
    addPokemonToPokedex,
    deletePokemonFromPokedex,
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.pathname.slice(9);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchPokemon = (pathnamedPokemon) => {
    const pokemonFromPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex["name"] === pathnamedPokemon
    );

    if (pokemonFromPokedex) {
      onOpen();
      setTimeout(() => {
        onClose();
        deletePokemonFromPokedex(pokemonFromPokedex);
      }, 700);
      return;
    } else if (!pokemonFromPokedex) {
      const pokemonFromPokelist = pokemonList.find(
        (pokemonInPokelist) => pokemonInPokelist["name"] === pathnamedPokemon
      );
      onOpen();
      setTimeout(() => {
        onClose();
        addPokemonToPokedex(pokemonFromPokelist);
      }, 700);
      return;
    }
  };

  return (
    <>
      {isLoaded ? (
        <Grid
          h={{ base: "15rem", md: "10rem" }}
          w="100vw"
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3, 1fr)" }}
          templateRows={{ base: "(10rem,5rem)", md: "1" }}
          justifyItems="center"
          alignItems="center"
          gap={{ md: "12" }}
        >
          <GridItem
            colStart={{ base: "1", md: "2" }}
            colSpan={{ base: "2", md: "1" }}
            p={{ base: "2rem", md: "0" }}
          >
            <img src={logo} alt="Pokemon"></img>
          </GridItem>
          {location.pathname === "/pokedex" ||
          location.pathname === `/details/${name}` ? (
            <GridItem
              colStart={{ base: "1", md: "1" }}
              rowStart={{ base: "2", md: "1" }}
              pb={{base:"1rem", md:'0'}}
            >
              <Button
                variant={"pokemonList"}
                onClick={() => goToPokemonListPage(navigate)}
              >
                {" "}
                <ChevronLeftIcon></ChevronLeftIcon>Todos Pokémons
              </Button>
            </GridItem>
          ) : (
            " "
          )}
          {location.pathname === "/" ? (
            <GridItem
              colStart={{ base: "1", md: "3" }}
              colSpan={{ base: "2", md: "1" }}
              rowStart={{ base: "2", md: "1" }}
              pb={{base:"1rem", md:'0'}}
            >
              <Button
                variant={"pokedex"}
                onClick={() => goToPokedexPage(navigate)}
              >
                Pokedéx
              </Button>
            </GridItem>
          ) : (
            ""
          )}
          {location.pathname === `/details/${name}` ? (
            pokedex.find(
              (pokemonInPokedex) => pokemonInPokedex["name"] === name
            ) ? (
              <GridItem
                colStart={{ base: "2", md: "3" }}
                colSpan={{ base: "2", md: "1" }}
                rowStart={{ base: "2", md: "1" }}
                pb={{base:"1rem", md:'0'}}
              >
                <Button
                  colStart={{ md: "3" }}
                  variant={"delete"}
                  onClick={() => fetchPokemon(name)}
                >
                  Excluir da Pokedéx
                </Button>
                <DeleteModal isOpen={isOpen} onClose={onClose} />
              </GridItem>
            ) : (
              <GridItem
                colStart={{ base: "2", md: "3" }}
                colSpan={{ base: "2", md: "1" }}
                rowStart={{ base: "2", md: "1" }}
                pb={{base:"1rem", md:'0'}}
              >
                <Button
                  colStart={{ md: "3" }}
                  variant={"capturar"}
                  onClick={() => fetchPokemon(name)}
                >
                  Capturar!
                </Button>
                <CaptureModal isOpen={isOpen} onClose={onClose} />
              </GridItem>
            )
          ) : (
            ""
          )}
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
