import { useParams } from "react-router-dom"
import BigPokemonCard from "../../components/BigPokemonCard/BigPokemonCard"
import { useRequestData } from "../../hooks/useRequesData"
import { PageContainer, PageDisplayContainer, Title } from "../PokemonsListPage/PokemonListStyle"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <PageContainer>
            <PageDisplayContainer>
                <Title>Pokemon Detail Page</Title>
                {isLoading? <p>...is loading...</p> : ""}
                {error ? <p>ERROR!</p> : ""}
                {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}

            </PageDisplayContainer>
        </PageContainer>
    )
}

export default PokemonDetailPage