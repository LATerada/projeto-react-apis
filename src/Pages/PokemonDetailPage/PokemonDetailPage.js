import { useParams } from "react-router-dom"
import BigPokemonCard from "../../components/BigPokemonCard/BigPokemonCard"
import { useRequestData } from "../../hooks/useRequesData"

const PokemonDetailPage = () => {
    const { id } = useParams()
    const [ pokemon, isLoading, isLoaded, error ] = useRequestData({}, `/${id}`)

    return(
        <div>
            <main>
                <h1>Pokemon Detail Page</h1>
                {isLoading? <p>...is loading...</p> : ""}
                {error ? <p>ERROR!</p> : ""}
                {isLoaded ? <BigPokemonCard pokemon={pokemon}/> : ""}

            </main>
        </div>
    )
}

export default PokemonDetailPage