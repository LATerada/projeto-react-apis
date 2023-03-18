import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { goToDetailsPage } from "../router/coordinator";
import { useRequestData } from "../hooks/useRequesData";
import { cardColor } from "../utils/cardColor";
import { pokemonType } from "../utils/pokemonTypes";
import DeleteModal from "./DeleteModal";
import CaptureModal from "./CaptureModal";
import pokeball from "../assets/poke-shadow.png";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const PokemonCard = (props) => {
  const { addPokemonToPokedex, deletePokemonFromPokedex } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, isLoading, isLoaded, error] = useRequestData(
    {},
    `/${props.pokemon.name}`
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const catchPokemon = () => {
    onOpen();
    setTimeout(() => {
      onClose();
      addPokemonToPokedex(props.pokemon);
    }, 700);
  };
  const deletePokemon = () => {
    onOpen();
    setTimeout(() => {
      onClose();
      deletePokemonFromPokedex(props.pokemon);
    }, 700);
  };

  return (
    <>
      {isLoaded ? (
        <Box
          position="relative"
          w={{ base: "15rem", lg: "18rem", xl: "23rem", "2xl": "27.5rem" }}
          h={{ base: "9rem", lg: "11rem", xl: "12rem", "2xl": "13.125rem" }}
          bg={cardColor(pokemon.types[0].type.name)}
          borderRadius="0.75rem"
        >
          <Image
            zIndex={1}
            position="absolute"
            right={{ base: "-0.6rem", xl: "0.688rem" }}
            top="-3.313rem"
            w={{ base: "8rem", lg: "9rem", xl: "10rem", "2xl": "12.5rem" }}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Imagem do Pokemon"
          />
          <Image
            position="absolute"
            right="0"
            top="0"
            w={{ base: "9rem", lg: "11rem", xl: "13rem", "2xl": "16rem" }}
            src={pokeball}
          />
          <Text zIndex={2} textStyle={"h2"}>
            {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
          </Text>
          <Text textStyle={"h1"}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Text>
          <Flex
            pl={{ base: "1rem", lg: "1.2rem", xl: "1.438rem" }}
            pt={{ base: "0.4rem", lg: "0.625rem" }}
            columnGap="0.438rem"
          >
            <Image
              zIndex={2}
              h={{
                base: "1.2rem",
                lg: "1.5rem",
                xl: "1.7rem",
                "2xl": "1.931rem",
              }}
              src={pokemonType(pokemon.types[0].type.name)}
            />
            {pokemon.types.length > 1 ? (
              <Image
                zIndex={2}
                h={{
                  base: "1.2rem",
                  lg: "1.5rem",
                  xl: "1.7rem",
                  "2xl": "1.931rem",
                }}
                src={pokemonType(pokemon.types[1].type.name)}
              />
            ) : (
              ""
            )}
          </Flex>
          <Button
            variant={"details"}
            onClick={() => goToDetailsPage(navigate, props.pokemon.name)}
          >
            Detalhes
          </Button>
          {location.pathname === "/" ? (
            <>
              <Button variant={"captureCard"} onClick={catchPokemon}>
                Capturar!
              </Button>
              <CaptureModal isOpen={isOpen} onClose={onClose} />
            </>
          ) : (
            ""
          )}
          {location.pathname === "/pokedex" ? (
            <>
              <Button variant={"deleteCard"} onClick={deletePokemon}>
                Excluir
              </Button>
              <DeleteModal isOpen={isOpen} onClose={onClose} />
            </>
          ) : (
            ""
          )}
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default PokemonCard;
