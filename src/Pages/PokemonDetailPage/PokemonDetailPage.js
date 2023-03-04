import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import { PokemonName } from "../../Components/PokemonCard/PokemonCardStyle"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"
import { BigCardContainer } from "./PokemonDetailStyle"

const PokemonDetailPage = (props) => {
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }, [id])

    return(
        <PageContainer>
            <Header
                pokedex={props.pokedex}
                deletePokemonFromPokedex={props.deletePokemonFromPokedex}/>
            <PageDisplayContainer>
                <Title>Pokemon Detail Page</Title>
                <BigCardContainer>
                    <PokemonName></PokemonName>
                </BigCardContainer>
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokemonDetailPage