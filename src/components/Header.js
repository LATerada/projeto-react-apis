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
    const name = location.pathname.slice(8)

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
                <Grid h='10rem' w='full' templateColumns='repeat(3, 1fr)' justifyItems='center' alignItems='center' gap={12}>
                    {location.pathname === "/pokedex" || location.pathname === `/detail/${name}` ? 
                        <Button variant={'pokemonList'} onClick={()=> goToPokemonListPage(navigate)} > <ChevronLeftIcon></ChevronLeftIcon>Todos Pokémons</Button> 
                    : " "}
                    <GridItem colStart={2}><img src={logo} alt="Pokemon"></img></GridItem>
                    {location.pathname === "/" ? 
                        <Button variant={'pokedex'} onClick={() => goToPokedexPage(navigate)} >Pokedéx</Button> 
                    : "" }
                    {location.pathname === `/detail/${name}` ?
                        (pokedex.find((pokemonInPokedex) => pokemonInPokedex["name"] === name)) ? 
                        <>
                            <Button variant={'delete'} onClick={()=> fetchPokemon(name)} >Excluir da Pokedéx</Button> 
                            <DeleteModal
                            isOpen={isOpen} onClose={onClose} />
                        </>
                        : <>
                            <Button variant={'capturar'} onClick={() => fetchPokemon(name)} >Capturar!</Button> 
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