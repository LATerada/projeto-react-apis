import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../../router/coordinator";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import logo from "../../assets/logo.png"
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

const Header = () => {
    const { pokedex, isLoaded, addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.pathname.slice(8)


    const fetchPokemon = (pathnamedPokemon) => {
        const pokemon = pokedex.find((pokemonInPokedex) => pokemonInPokedex["name"] === pathnamedPokemon)
        return pokemon
    }
    
    useEffect(() => {
        console.log({pokedex, name})
    },[pokedex,name])


    return(
        <Box>
            {isLoaded ? 
            <Grid h='10rem' w='full' templateColumns='repeat(3, 1fr)' justifyItems='center' alignItems='center' gap={12}>
                {location.pathname === "/pokedex" || location.pathname === `/detail/${name}` ? 
                <Button onClick={()=> goToPokemonListPage(navigate)} >All Pokémons</Button> 
                : " "}
                <GridItem colStart={2}><img src={logo}></img></GridItem>
                {location.pathname === "/" ? 
                    <Button onClick={() => goToPokedexPage(navigate)} >Pokedéx</Button> 
                : "" }
                {location.pathname === `/detail/${name}` ?
                    fetchPokemon(name) ? 
                        <Button onClick={() => deletePokemonFromPokedex(fetchPokemon(name))} >Delete from Pokedéx</Button> 
                    : <Button onClick={() => addPokemonToPokedex(fetchPokemon(name))} >Add to Pokedex</Button> 
                : ""}
            </Grid> 
            : ""}
       
        </Box>
    )
}

export default Header;