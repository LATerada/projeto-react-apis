import { useNavigate, useLocation } from "react-router-dom";
import { goToPokedexPage, goToPokemonListPage } from "../router/coordinator";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import logo from "../assets/logo.png"
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons"

const Header = () => {
    const { pokedex,  pokemonList, isLoaded, addPokemonToPokedex, deletePokemonFromPokedex } = useContext(GlobalContext)
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.pathname.slice(8)

    const fetchPokemon = (pathnamedPokemon) => {
        const pokemon = pokedex.find((pokemonInPokedex) => pokemonInPokedex["name"] === pathnamedPokemon)
        console.log(pokemon)
        if(pokemon){
            return pokemon
        }else if(!pokemon){
            const pokemonFromPokelist = pokemonList.find((pokemonInPokelist) => pokemonInPokelist["name"] === pathnamedPokemon)
            console.log(pokemonFromPokelist)
            return pokemonFromPokelist
        }
    }
    
    useEffect(() => {
        // console.log({pokedex, name})
    },[pokedex,name])

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
                            <Button variant={'delete'} onClick={() => deletePokemonFromPokedex(fetchPokemon(name))} >Excluir da Pokedéx</Button> 
                        : <Button variant={'capturar'} onClick={() => addPokemonToPokedex(fetchPokemon(name))} >Capturar!</Button> 
                    : ""}
                </Grid> 
            : ""}
       
        </>
    )
}

export default Header;