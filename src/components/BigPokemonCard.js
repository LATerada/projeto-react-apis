import { cardColor } from "../utils/cardColor";
import { pokemonType } from "../utils/pokemonTypes";
import { progressBarColor } from "../utils/progressBarColor";
import pokeball from "../assets/poke-shadow2.png";
import { Flex, Grid, GridItem, Image, Progress, Text } from "@chakra-ui/react";

const BigPokemonCard = (props) => {
  const { pokemon } = props;

  let totalStats = 0;

  return (
    <Grid
      position="relative"
      w={{
        base: "22rem",
        sm: "22rem",
        smd: "30rem",
        md: "42rem",
        lg: "51rem",
        xl: "68rem",
        "2xl": "86.821rem",
      }}
      h={{
        base: "30rem",
        sm: "60rem",
        smd: "40rem",
        md: "50rem",
        lg: "33rem",
        xl: "37rem",
        "2xl": "41.438rem",
      }}
      borderRadius="2.368rem"
      templateColumns={{
        sm: "(1fr,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
      }}
      templateRows={{
        sm: "repeat(4,1fr)",
        smd: "repeat(5,1fr)",
        md: "repeat(4,1fr)",
      }}
      justifyItems="center"
      alignItems="center"
      bg={cardColor(pokemon.types[0].type.name)}
    >
      <Image
        position="absolute"
        top={{ md: "none", lg: "-0.5rem" }}
        bottom={{ base: "-0.7rem" }}
        right="-0.7rem"
        h={{
          base: "20rem",
          md: "30rem",
          lg: "34.8rem",
          xl: "38.8rem",
          "2xl": "42.938rem",
        }}
        src={pokeball}
      />
      <Image
        position="absolute"
        top={{
          sm: "-4.5rem",
          smd: "-5rem",
          md: "-5rem",
          xl: "-7rem",
          "2xl": "-8rem",
        }}
        right={{ sm: "0rem", smd: "0.8rem", md: "2.196rem" }}
        w={{ sm: "12rem", smd: "13rem", md: "18rem", lg: "16.875rem" }}
        src={props.pokemon.sprites.other["official-artwork"].front_default}
        alt="Imagem do Pokemon"
      />
      <GridItem
        colStart={{ md: "1", lg: "1" }}
        colSpan={1}
        rowStart={{ sm: "4", lg: "2", xl: "1" }}
        rowSpan={2}
        w={{
          sm: "8rem",
          smd: "11rem",
          md: "16rem",
          lg: "9rem",
          xl: "13rem",
          "2xl": "17.625rem",
        }}
        h={{
          sm: "8rem",
          smd: "11rem",
          md: "13rem",
          lg: "9rem",
          xl: "13rem",
          "2xl": "17.625rem",
        }}
        mt={{ sm: "-1rem", smd: "0rem", md: "0", lg: "-3rem", xl: "0" }}
        mb={{ md: "3rem", lg: "0" }}
        ml={{ sm: "-4rem", smd: "0", md: "-0.5rem", lg: "0" }}
        bg="white"
        borderRadius="0.5rem"
        display="grid"
        justifyItems="center"
        alignItems="center"
      >
        <Image
          w={{
            sm: "4.5rem",
            smd: "5.5rem",
            md: "8rem",
            lg: "6rem",
            xl: "8rem",
          }}
          bg="white"
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .front_default
          }
        />
      </GridItem>
      <GridItem
        colStart={{ sm: "2", lg: "1" }}
        rowStart={{ sm: "4", lg: "3" }}
        rowSpan={2}
        w={{
          sm: "8rem",
          smd: "11rem",
          md: "16rem",
          lg: "9rem",
          xl: "13rem",
          "2xl": "17.625rem",
        }}
        h={{
          sm: "8rem",
          smd: "11rem",
          md: "13rem",
          lg: "9rem",
          xl: "13rem",
          "2xl": "17.625rem",
        }}
        mt={{ sm: "-1rem", smd: "0rem", md: "0", lg: "1rem", xl: "0" }}
        mb={{ md: "3rem", lg: "0" }}
        ml={{ sm: "-7rem", smd: "-5rem", md: "-5rem", lg: "0" }}
        bg="white"
        borderRadius="0.5rem"
        display="grid"
        justifyItems="center"
        alignItems="center"
      >
        <Image
          w={{
            sm: "4.5rem",
            smd: "5.5rem",
            md: "8rem",
            lg: "6rem",
            xl: "8rem",
          }}
          bg="white"
          src={
            pokemon.sprites.versions["generation-v"]["black-white"].animated
              .back_default
          }
        />
      </GridItem>
      <GridItem
        colStart={{ sm: "1", smd: "2", md: "2", lg: "3", xl: "2" }}
        colSpan={{ sm: "2", smd: "1" }}
        rowStart={{ smd: "2", md: "2", lg: "2", xl: "1" }}
        rowSpan={{ sm: "1", smd: "2", md: "2", lg: "4" }}
        w={{
          base: "15rem",
          sm: "17rem",
          smd: "13rem",
          md: "17rem",
          lg: "17rem",
          "2xl": "21.438rem",
        }}
        h={{
          sm: "17.5rem",
          smd: "17rem",
          md: "18rem",
          lg: "19rem",
          xl: "31.5rem",
          "2xl": "38.313rem",
        }}
        ml={{ smd: "-7rem", md: "-4rem", lg: "-4.5rem", xl: "0" }}
        mb={{ md: "0", lg: "-0.5rem", xl: "0" }}
        mt={{ smd: "1.5rem", md: "0", lg: "-2rem", xl: "0" }}
        bg="white"
        borderRadius="0.75rem"
        display="grid"
        justifyItems="center"
      >
        <GridItem
          w={{ base: "11rem", md: "15rem", lg: "15rem", "2lx": "19.18rem" }}
          h="16.063rem"
          pt="1.188rem"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Text
            textStyle={"baseStats"}
            w="100%"
            pl={{ base: "1rem", xl: "1.125rem" }}
            pb={{ base: "1rem", md: "1.5rem", lg: "1rem" }}
          >
            Base stats
          </Text>
          {pokemon.stats.map((stat) => {
            totalStats += stat.base_stat;
            return (
              <Grid
                key={stat.stat.name}
                column={3}
                w={{
                  base: "14rem",
                  smd: "10rem",
                  md: "14rem",
                  lg: "14rem",
                  xl: "16rem",
                  "2xl": "20rem",
                }}
                h="1.66rem"
                borderTop="1px"
                borderTopColor="gray.100"
                alignItems="center"
              >
                <GridItem
                  pt="0.2rem"
                  pr="1rem"
                  display="grid"
                  justifyItems="flex-end"
                  alignItems="center"
                  colStart={1}
                  w={{
                    base: "5rem",
                    smd: "1.65rem",
                    md: "3.5rem",
                    lg: "2.5rem",
                    xl: "3.5rem",
                    "2xl": "4rem",
                  }}
                  textStyle={"stat"}
                >
                  {stat.stat.name === "hp"
                    ? stat.stat.name.toUpperCase()
                    : stat.stat.name === "special-attack"
                    ? "Sp.Atks"
                    : stat.stat.name === "special-defense"
                    ? "Sp.Def"
                    : stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)}
                </GridItem>
                <GridItem
                  colStart={2}
                  w={{
                    base: "2rem",
                    smd: "1.3rem",
                    md: "2rem",
                    lg: "1.5rem",
                    xl: "1.8rem",
                    "2xl": "2.39rem",
                  }}
                  textStyle={"stat"}
                  color="black"
                  fontWeight={"500"}
                >
                  {stat.base_stat}
                </GridItem>
                <GridItem colStart={3}>
                  <Progress
                    w={{
                      base: "6rem",
                      smd: "3rem",
                      md: "8rem",
                      lg: "7rem",
                      xl: "10rem",
                      "2xl": "12.5rem",
                    }}
                    borderRadius="0.2rem"
                    variant={progressBarColor(stat.base_stat)}
                    value={stat.base_stat}
                  />
                </GridItem>
              </Grid>
            );
          })}
          <Grid
            column={3}
            w={{
              base: "14rem",
              smd: "10rem",
              md: "14rem",
              xl: "16rem",
              "2xl": "20rem",
            }}
            h="1.66rem"
            borderTop="1px"
            borderTopColor="gray.100"
            borderBottom="1px"
            borderBottomColor="gray.100"
            alignItems="center"
          >
            <GridItem
              colStart={1}
              w={{
                base: "5rem",
                smd: "1.65rem",
                md: "3.8rem",
                lg: "2.5rem",
                xl: "3.7rem",
                "2xl": "4.2rem",
              }}
              pr="1.16rem"
              display="grid"
              justifyItems="flex-end"
              alignItems="center"
              textStyle={"stat"}
            >
              Total
            </GridItem>
            <GridItem
              colStart={2}
              w={{
                base: "2rem",
                smd: "1.8rem",
                md: "2rem",
                lg: "1.8rem",
                xl: "2rem",
                "2xl": "2.59rem",
              }}
              textStyle={"stat"}
              color="black"
              fontWeight={"extrabold"}
            >
              {totalStats}
            </GridItem>
            <GridItem
              colStart={3}
              w={{
                base: "6.5rem",
                smd: "2.5rem",
                md: "11rem",
                lg: "7rem",
                xl: "12.5rem",
              }}
            ></GridItem>
          </Grid>
        </GridItem>
      </GridItem>
      <GridItem
        colStart={{ sm: "1", xl: "3" }}
        rowStart={{ sm: "1" }}
        rowSpan={1}
        minW="12rem"
        ml={{
          smd: "0rem",
          md: "-6rem",
          lg: "1rem",
          xl: "-3.5rem",
          "2xl": "-3rem",
        }}
        mt={{
          sm: "3rem",
          smd: "1rem",
          lg: "1.5rem",
          xl: "1rem",
          "2xl": "-2rem",
        }}
      >
        <Text colStart={3} textStyle={"h2Details"}>
          {pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}
        </Text>
        <Text textStyle={"h1Details"}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Text>
        <Flex
          pl={{ sm: "1rem", md: "1rem", xl: "1.438rem" }}
          pt={{ sm: "0.5rem", md: "1rem", lg: "0.625rem" }}
          columnGap="0.438rem"
        >
          <Image h="1.931rem" src={pokemonType(pokemon.types[0].type.name)} />
          {pokemon.types.length > 1 ? (
            <Image h="1.931rem" src={pokemonType(pokemon.types[1].type.name)} />
          ) : (
            ""
          )}
        </Flex>
      </GridItem>
      <GridItem
        colStart={{ smd: "1", md: "1", lg: "2", xl: "3" }}
        colSpan={{ sm: "2", smd: "1" }}
        rowStart={{ sm: "3", smd: "2", md: "2", lg: "2" }}
        rowSpan={{ smd: "2", md: "2", lg: "3", xl: "3" }}
        ml={{
          smd: "-2rem",
          md: "-1rem",
          lg: "-6rem",
          xl: "2rem",
          "2xl": "5rem",
        }}
        mt={{ sm: "1.5rem", md: "-1rem", lg: "-1rem", xl: "0" }}
        w={{
          base: "15rem",
          sm: "17rem",
          smd: "9rem",
          md: "16rem",
          lg: "14rem",
          xl: "16rem",
          "2xl": "18.25rem",
        }}
        h={{
          sm: "17rem",
          md: "21rem",
          lg: "19rem",
          xl: "22.5rem",
          "2xl": "28.313rem",
        }}
        bg="white"
        borderRadius="0.5rem"
      >
        <Text
          pt="1.125rem"
          pb={{ sm: "0.3rem", md: "1rem", lg: "1rem" }}
          pl="1.125rem"
          textStyle={"baseStats"}
        >
          Moves
        </Text>
        {pokemon.moves.slice(0, 4).map((move) => {
          return (
            <Text
              key={move.move.name}
              w="fit-content"
              p={{ sm: "0.5rem", md: "0.625rem" }}
              ml="1.125rem"
              mt="1rem"
              border="1px dashed rgba(0, 0, 0, 0.14)"
              borderRadius="0.75rem"
              textStyle={"move"}
              bg="#ECECEC"
            >
              {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
            </Text>
          );
        })}
      </GridItem>
    </Grid>
  );
};

export default BigPokemonCard;
