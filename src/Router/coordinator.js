export const GoToPokemonListPage = (navigate) => {
    navigate("/")
}

export const GoToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const GoToDetailPage = (navigate, id) => {
    navigate(`/detail/${id}`)
}