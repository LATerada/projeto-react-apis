import { cardColor } from "../utils/cardColor"
import { pokemonType } from "../utils/pokemonTypes";
import { progressBarColor } from "../utils/progressBarColor";
import pokeball from "../assets/poke-shadow2.png"
import { 
    Flex, 
    Grid, 
    GridItem, 
    Image, 
    Progress, 
    Text } from "@chakra-ui/react"

const BigPokemonCard = (props) => {
    const { pokemon } = props;

    let totalStats = 0

    return(
        <Grid 
        position='relative' w={{ base:'22rem',sm:'30rem', md:'42rem', lg: '51rem', xl: '68rem', '2xl': '86.821rem' }} h={{ base: '30rem', md:'50rem', lg: '33rem', xl: '37rem', '2xl': '41.438rem' }} borderRadius='2.368rem' templateColumns={{md:'(1fr,1fr)',lg:'repeat(3,1fr)',xl:'repeat(4,1fr)'}} templateRows='repeat(4,1fr)' justifyItems='center' alignItems='center' bg={cardColor(pokemon.types[0].type.name)}>
            <Image
            position='absolute' top={{md:'none',lg:'-0.5rem'}} bottom={{md:'0'}} right='-1rem' h={{ md:'30rem', lg:'34.8rem',xl:'38.8rem','2xl':'42.938rem'}} src={pokeball}/>
            <Image 
            position='absolute' top={{md:'-5rem',xl:'-7rem','2xl':'-8rem'}} right='2.196rem' w={{md:'20rem',lg:'16.875rem'}} src={props.pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
            <GridItem 
            colStart={{ md:'1',lg:'1'}} colSpan={1} rowStart={{ md:'4',lg:'2', xl:'1'}} rowSpan={2} w={{ md:'16rem',lg:'9rem',xl:'13rem','2xl':'17.625rem'}} h={{ md:'13rem',lg:'9rem',xl:'13rem','2xl':'17.625rem'}}  mt={{md:'0',lg:'1rem',xl:'0'}} mb={{ md:'3rem',lg:'0'}} ml={{ md:'-0.5rem',lg:'0'}} bg='white' borderRadius='0.5rem' display='grid' justifyItems='center' alignItems='center' >
                <Image 
                w={{ md:'8rem',lg:'6rem',xl:'8rem'}} bg='white' src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}/>
            </GridItem>
            <GridItem 
            colStart={{ md:'2', lg:'1'}} rowStart={{ md:'4',lg:'3'}} rowEnd={5} w={{md:'16rem', lg:'9rem',xl:'13rem','2xl':'17.625rem'}} h={{ md:'13rem', lg:'9rem',xl:'13rem','2xl':'17.625rem'}} mt={{md:'0',lg:'1rem',xl:'0'}} mb={{ md:'3rem',lg:'0'}} ml={{ md:'-5rem',lg:'0'}} bg='white' borderRadius='0.5rem'  display='grid' justifyItems='center' alignItems='center' >
                <Image 
                w={{ md:'8rem', lg:'6rem',xl:'8rem'}} bg='white' src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}/>
            </GridItem>
            <GridItem 
            colStart={{ md:'2',lg:'3',xl:'2'}} colSpan={1} rowStart={{ md:'2',lg:'2',xl:'1' }} rowSpan={{md:'2',lg:'4'}} w={{ md:'17rem', lg:'17rem','2xl':'21.438rem'}} h={{ md:'18rem',lg:'17rem',xl:'31.5rem','2xl':'38.313rem' }} ml={{ md:'-4rem',lg:'-4.5rem', xl:'0'}} mb={{md:'0',lg:'-0.5rem', xl:'0'}} mt={{ md:'1.5rem',lg:'0'}} bg='white' borderRadius='0.75rem' display='grid' justifyItems='center' >
                <GridItem 
                w={{ md:'15rem',lg:'15rem','2lx':'19.18rem'}} h='16.063rem' pt='1.188rem' display='flex' justifyContent='center' flexWrap='wrap' >
                    <Text 
                    textStyle={'baseStats'} w='100%' pl={{ md:'1rem', xl:'1.125rem'}} pb={{ md:'1.5rem',lg:'1rem'}}>Base stats</Text>
                    {pokemon.stats.map((stat) => {
                        totalStats += stat.base_stat
                            return(
                                <Grid 
                                key={stat.stat.name} column={3} w={{ md:'14rem',lg:'14rem',xl:'16rem','2xl':'20rem'}} h='1.66rem' borderTop='1px' borderTopColor='gray.100' alignItems='center'>
                                    <GridItem 
                                    pt='0.2rem' pr='1rem' display='grid' justifyItems='flex-end' alignItems='center' colStart={1} w={{ md:'3.5rem',lg:'2.5rem', xl:'3.5rem', '2xl':'4rem'}} textStyle={'stat'} >{stat.stat.name === 'hp' ? stat.stat.name.toUpperCase() : stat.stat.name === 'special-attack'? 'Sp.Atks':  stat.stat.name === 'special-defense'? 'Sp.Def': stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</GridItem>
                                    <GridItem 
                                    colStart={2} w={{ md:'2rem',lg:'1.5rem',xl:'1.8rem', '2xl':'2.39rem'}} textStyle={'stat'} color='black' fontWeight={'500'} >{stat.base_stat}</GridItem>
                                    <GridItem 
                                    colStart={3}>
                                        <Progress
                                        w={{ md:'8rem', lg:'7rem',xl:'10rem', '2xl':'12.5rem'}}  borderRadius='0.2rem' variant={progressBarColor(stat.base_stat)} value={stat.base_stat}/>
                                    </GridItem>
                                </Grid>
                                )
                    })}
                    <Grid 
                    column={3} w={{ md:'14rem',xl:'16rem','2xl':'20rem'}} h='1.66rem' borderTop='1px' borderTopColor='gray.100' borderBottom='1px' borderBottomColor='gray.100' alignItems='center'>
                        <GridItem 
                        colStart={1} w={{ md:'3.8rem', lg:'2.5rem',xl:'3.7rem', '2xl':'4.2rem'}}  pr='1.16rem' display='grid' justifyItems='flex-end' alignItems='center' textStyle={'stat'}>Total</GridItem>
                        <GridItem 
                        colStart={2}  w={{ md:'2rem', lg:'1.8rem', xl:'2rem','2xl':'2.59rem'}} textStyle={'stat'} color='black' fontWeight={'extrabold'} >{totalStats}</GridItem>
                        <GridItem 
                        colStart={3} w={{md:'11rem',lg:'7rem', xl:'12.5rem'}}></GridItem>
                    </Grid>
                </GridItem>
            </GridItem>
            <GridItem 
            colStart={{lg:'1',xl:'3'}} rowStart={{lg:'1'}} rowSpan={1} ml={{ md:'-6rem',lg:'1rem', xl:'-3.5rem','2xl':'-3rem'}} mt={{ lg:'1.5rem',xl:'1rem', '2xl':'-2rem'}} >
                <Text 
                colStart={3} textStyle={'h2Details'} >{pokemon.id < 10 ? `#0${pokemon.id}`: `#${pokemon.id}`}</Text>
                <Text 
                textStyle={'h1Details'} >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                <Flex 
                pl={{ md:'1rem',xl:'1.438rem'}} pt={{md:'1rem',lg:'0.625rem'}} columnGap='0.438rem'>
                    <Image 
                    h='1.931rem' src={pokemonType(pokemon.types[0].type.name)} />
                    {pokemon.types.length > 1 ?  <Image h='1.931rem' src={pokemonType(pokemon.types[1].type.name)}/> : ""}
                </Flex>
            </GridItem>
            <GridItem 
            colStart={{md:'1',lg:'2',xl:'3'}} rowStart={{md:'2',lg:'2'}} rowSpan={{ md:'2',lg:'3',xl:'3'}} ml={{ md:'-1rem',lg:'-6rem',xl:'2rem','2xl':'5rem'}} mt={{ md:'-1rem', lg:'-1rem',xl:'0'}} w={{ md:'16rem',lg:'14rem',xl:'16rem','2xl':'18.25rem'}} h={{md:'21rem',lg:'19rem',xl:'22.5rem','2xl':'28.313rem'}} bg='white' borderRadius='0.5rem'>
                <Text
                py='1.125rem' pl='1.125rem' textStyle={'baseStats'}>Moves</Text>
                {pokemon.moves.slice(0,4).map((move)=> {
                    return (
                        <Text key={move.move.name} w='fit-content' p='0.625rem' ml='1.125rem' mt='1rem' border='1px dashed rgba(0, 0, 0, 0.14)' borderRadius='0.75rem' textStyle={'move'} bg='#ECECEC'>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</Text>
                    )
                })}
            </GridItem>
        </Grid>
    )
}

export default BigPokemonCard

