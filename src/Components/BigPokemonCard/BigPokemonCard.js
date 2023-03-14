import { Grid, Image, Text } from "@chakra-ui/react"
import { cardColor } from "../../utils/cardColor"
import pokeball from "../../assets/poke-shadow2.png"

const BigPokemonCard = (props) => {
    const { pokemon } = props
    console.log(props.pokemon.types)
    return(
        <Grid position='relative' pl='40px' w='86.821rem' h='41.438rem' borderRadius='2.368rem' bg={cardColor(pokemon.types[0].type.name)}>
            <Image position='absolute' top='-8rem' right='2.196rem' src={props.pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
            <Image position='absolute' top='-5rem'right='-5.5rem' w='41.563rem' h='41.563rem' src={pokeball}/>
            <Text textStyle={'h1'} >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
            <p>{props.pokemon.types[0].type.name}</p>
            { props.pokemon.types.length > 1 ? <p>{props.pokemon.types[1].type.name}</p> : ""}



            {/* <Box position='relative'>
                    <Text textStyle={'h2'}>{pokemon.id < 10 ? `#0${pokemon.id}`: `#${pokemon.id}`}</Text>
                    <Text textStyle={'h1'} >{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
                    <Image zIndex='1' position='absolute' right='0.688rem' top='-3.313rem' width='200px' src={pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
                    <Image position='absolute' right='0' top='0' src={pokeball} />
                    <Flex pl='1.438rem' pt='0.625rem' columnGap='0.438rem'>
                        <Image h='1.931rem' src={pokemonType(pokemon.types[0].type.name)} />
                        {pokemon.types.length > 1 ?  <Image h='1.931rem' src={pokemonType(pokemon.types[1].type.name)}/> : ""}
                    </Flex>
                    <Button variant={'details'} onClick={() => goToDetailPage(navigate, props.pokemon.name)} >Detalhes</Button>
                    {location.pathname === "/" ?
                        <Button variant={'captureCard'} onClick={() => addPokemonToPokedex(props.pokemon)}>Capturar!</Button> 
                    : ""}
                    {location.pathname === "/pokedex" ?
                        <Button variant={'deleteCard'} onClick={()=> deletePokemonFromPokedex(props.pokemon)} >Excluir</Button>
                    : ""}
                </Box> */}
        </Grid>

    )

}
export default BigPokemonCard
