// import axios from "axios"
// import { useEffect } from "react"
import { useParams } from "react-router-dom"
import BigPokemonCard from "../../components/BigPokemonCard/BigPokemonCard"
import { useRequestData } from "../../hooks/useRequesData"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"
import { BigCardContainer } from "./PokemonDetailStyle"

const PokemonDetailPage = () => {
    const { id } = useParams()
    console.log(id)

    const [ pokemon, setPokemon, isLoading, error ] = useRequestData({}, `/${id}`)

    console.log(pokemon)
    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.log(error.response)
    //     })
    // }, [id])

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