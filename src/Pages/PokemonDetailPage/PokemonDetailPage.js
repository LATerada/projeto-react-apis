import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import BigPokemonCard from "../../Components/BigPokemonCard/BigPokemonCard"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"
import { BigCardContainer } from "./PokemonDetailStyle"

const PokemonDetailPage = (props) => {
    const { id } = useParams()
    console.log({props})

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
            <PageDisplayContainer>
                <Title>Pokemon Detail Page</Title>
                <BigCardContainer>
                    <BigPokemonCard/>
                </BigCardContainer>
            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokemonDetailPage