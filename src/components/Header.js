import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import { goToPokedexPage, goToPokemonListPage } from "../router/coordinator";
import logo from "../assets/logo.png"
import { ChevronLeftIcon } from "@chakra-ui/icons"
import { 
    Button, 
    Grid, 
    GridItem, 
    useDisclosure} from "@chakra-ui/react";
import DeleteModal from "./DeleteModal";
import CaptureModal from "./CaptureModal";

const Header = () => {
    const { pokedex,  pokemonList, isLoaded, addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.pathname.slice(9)
    console.log(name)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const fetchPokemon = (pathnamedPokemon) => {
        const pokemonFromPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex["name"] === pathnamedPokemon)

        if(pokemonFromPokedex){
            onOpen()
            setTimeout(() => {
                onClose()
                deletePokemonFromPokedex(pokemonFromPokedex)
            },700 )
            return
        }else if(!pokemonFromPokedex){
            const pokemonFromPokelist = pokemonList.find((pokemonInPokelist) => pokemonInPokelist["name"] === pathnamedPokemon)
            onOpen()
            setTimeout(() => {
                onClose()
                addPokemonToPokedex(pokemonFromPokelist)
            },700 )
            return
        }
    }

    return(
        <>
            {isLoaded ? 
                <Grid h={{base:'15rem', md:'10rem'}} w='100vw' templateColumns={{ base:'repeat(2,1fr)', md:'repeat(3, 1fr)'}} templateRows={{ base:'(8rem,2rem)', md:'1' }} justifyItems='center' alignItems='center' gap={{ md:'12'}}>
                    <GridItem 
                    colStart={{ base:'1',md:'2'}} colSpan={{ base:'2'}} p={{ base:'2rem' }}><img src={logo} alt="Pokemon"></img></GridItem>
                    {location.pathname === "/pokedex" || location.pathname === `/details/${name}` ? 
                        <GridItem
                        colStart={{ base:'1', md:'1'}} rowStart={{base:'2'}}>
                            <Button 
                             variant={'pokemonList'} onClick={()=> goToPokemonListPage(navigate)} > <ChevronLeftIcon></ChevronLeftIcon>Todos Pokémons</Button> 
                        </GridItem>
                    : " "}
                    {location.pathname === "/" ? 
                        <GridItem
                        colStart={{ base:'1', md:'3'}} colSpan={{ base:'2'}}>
                        <Button 
                        variant={'pokedex'} onClick={() => goToPokedexPage(navigate)} >Pokedéx</Button> 
                    </GridItem>
                    : "" }
                    {location.pathname === `/details/${name}` ?
                        (pokedex.find((pokemonInPokedex) => pokemonInPokedex["name"] === name)) ? 
                        <>
                            <Button 
                            colStart={{ md:'3'}} variant={'delete'} onClick={()=> fetchPokemon(name)} >Excluir da Pokedéx</Button> 
                            <DeleteModal
                            isOpen={isOpen} onClose={onClose} />
                        </>
                        : <>
                            <Button 
                            colStart={{ md:'3'}} variant={'capturar'} onClick={() => fetchPokemon(name)} >Capturar!</Button> 
                            <CaptureModal 
                            isOpen={isOpen} onClose={onClose} />
                        </>
                    : ""}
                </Grid> 
            : ""}
        </>
    )
}

export default Header;