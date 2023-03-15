import { Box, Flex, Grid, GridItem, Image, Progress, Text } from "@chakra-ui/react"
import { cardColor } from "../../utils/cardColor"
import pokeball from "../../assets/poke-shadow2.png"
import { pokemonType } from "../../utils/pokemonTypes";

const BigPokemonCard = (props) => {
    const { pokemon } = props;

    let totalStats = 0

    return(
        <Grid 
        position='relative' w='86.821rem' h='41.438rem' borderRadius='2.368rem' templateColumns='repeat(4,1fr)' templateRows='repeat(4,1fr)' justifyItems='center' alignItems='center' bg={cardColor(pokemon.types[0].type.name)}>
            <Image
            position='absolute' top='-0.5rem'right='-1rem' h='42.938rem' src={pokeball}/>
            <Image 
            position='absolute' top='-8rem' right='2.196rem' w='16.875rem' src={props.pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
            <GridItem 
            colStart={1} colSpan={1} rowSpan={2} w='17.625rem' h='17.625rem' bg='white' borderRadius='0.5rem' display='grid' justifyItems='center' alignItems='center' >
                <Image 
                w='8rem' bg='white' src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
            </GridItem>
            <GridItem 
            colStart={1} rowStart={3} rowEnd={5} w='17.625rem' h='17.625rem' bg='white' borderRadius='0.5rem'  display='grid' justifyItems='center' alignItems='center' >
                <Image 
                w='8rem' bg='white' src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
            </GridItem>
            <GridItem 
            colStart={2} colSpan={1} rowSpan={4} w='21.438rem' h='38.313rem' bg='white' borderRadius='0.75rem' display='grid' justifyItems='center' >
                <GridItem w='19.18rem' h='16.063rem' pt='1.188rem' >
                    <Text textStyle={'baseStats'} pb='1rem'>Base stats</Text>
                    {pokemon.stats.map((stat) => {
                        totalStats += stat.base_stat
                            return(
                                <Grid key={stat.stat.name} column={3} h='1.66rem' borderTop='1px' borderTopColor='gray.100' alignItems='center'>
                                    <GridItem pt='0.2rem' pr='1rem' display='grid' justifyItems='flex-end' alignItems='center' colStart={1} w='4rem' textStyle={'stat'} >{stat.stat.name === 'hp' ? stat.stat.name.toUpperCase() : stat.stat.name === 'special-attack'? 'Sp.Atks':  stat.stat.name === 'special-defense'? 'Sp.Def': stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</GridItem>
                                    <GridItem colStart={2} w='2.39rem' textStyle={'stat'} color='black' fontWeight={'500'} >{stat.base_stat}</GridItem>
                                    <GridItem colStart={3}>
                                        <Progress w='12.5rem' borderRadius='0.2rem' variant={stat.base_stat > 50 ? 'yellow' : 'baseStyle'} value={stat.base_stat}/>
                                    </GridItem>
                                </Grid>
                                )
                    })}
                    <Grid column={3} h='1.66rem' borderTop='1px' borderTopColor='gray.100' borderBottom='1px' borderBottomColor='gray.100' alignItems='center'>
                        <GridItem colStart={1} w='4.2rem' pr='1.16rem' display='grid' justifyItems='flex-end' alignItems='center' textStyle={'stat'}>Total</GridItem>
                        <GridItem colStart={2}  w='2.59rem' textStyle={'stat'} color='black' fontWeight={'extrabold'} >{totalStats}</GridItem>
                        <GridItem colStart={3} w='12.5rem'></GridItem>
                    </Grid>
                </GridItem>
            </GridItem>
            <GridItem 
            colStart={3} rowSpan={1} ml='-3rem' mt='-2rem' >
                <Text 
                colStart={3} textStyle={'h2'}>{pokemon.id < 10 ? `#0${pokemon.id}`: `#${pokemon.id}`}</Text>
                <Text 
                textStyle={'h1'} >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                <Flex 
                pl='1.438rem' pt='0.625rem' columnGap='0.438rem'>
                    <Image 
                    h='1.931rem' src={pokemonType(pokemon.types[0].type.name)} />
                    {pokemon.types.length > 1 ?  <Image h='1.931rem' src={pokemonType(pokemon.types[1].type.name)}/> : ""}
                </Flex>
            </GridItem>
            <GridItem 
            colStart={3} rowStart={2} rowSpan={3} ml='5rem' w='18.25rem' h='28.313rem' bg='white' borderRadius='0.5rem'>
                <Text 
                textStyle={'baseStats'}>Moves</Text>
            </GridItem>
        </Grid>
    )

}
export default BigPokemonCard

