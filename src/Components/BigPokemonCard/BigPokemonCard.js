import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { cardColor } from "../../utils/cardColor"
import pokeball from "../../assets/poke-shadow2.png"
import { pokemonType } from "../../utils/pokemonTypes";

const BigPokemonCard = (props) => {
    const { pokemon } = props

    return(
        <Grid position='relative' w='86.821rem' h='41.438rem' borderRadius='2.368rem' templateColumns='repeat(4,1fr)' templateRows='repeat(4,1fr)' justifyItems='center' alignItems='center' bg={cardColor(pokemon.types[0].type.name)}>
            <Image position='absolute' top='-0.5rem'right='-1rem' h='42.938rem' src={pokeball}/>
            <Image position='absolute' top='-8rem' right='2.196rem' w='16.875rem' src={props.pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
            <GridItem colstart={1} colSpan={1} rowSpan={2} w='17.625rem' h='17.625rem' bg='white' borderRadius='0.5rem' display='grid' justifyItems='center' alignItems='center' ><Image w='10rem' bg='white' src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/></GridItem>
            <GridItem colStart={1} rowStart={3} rowEnd={5} w='17.625rem' h='17.625rem' bg='white' borderRadius='0.5rem'  display='grid' justifyItems='center' alignItems='center' ><Image w='10rem' bg='white' src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/></GridItem>
            <GridItem colStart={2} colSpan={1} rowSpan={4} w='21.438rem' h='38.313rem' bg='white' borderRadius='0.75rem' >BASE STATS</GridItem>
            <GridItem colStart={3} rowSpan={1} >
                <Text colStart={3} textStyle={'h2'}>{pokemon.id < 10 ? `#0${pokemon.id}`: `#${pokemon.id}`}</Text>
                <Text textStyle={'h1'} >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                <Flex pl='1.438rem' pt='0.625rem' columnGap='0.438rem'>
                    <Image h='1.931rem' src={pokemonType(pokemon.types[0].type.name)} />
                    {pokemon.types.length > 1 ?  <Image h='1.931rem' src={pokemonType(pokemon.types[1].type.name)}/> : ""}
                </Flex>
            </GridItem>
            <GridItem colStart={3} rowStart={2} rowSpan={3} w='18.25rem' h='28.313rem' bg='white' borderRadius='0.5rem'
>Table</GridItem>
        </Grid>
    )

}
export default BigPokemonCard

