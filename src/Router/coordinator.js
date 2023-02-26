export const GoToPokemonListPage = (navigate, setScreen) => {
    setScreen(1)
    navigate("/")
}

export const GoToPokedexPage = (navigate, setScreen) => {
    setScreen(2)
    navigate("/pokedex")
}

export const GoToDetailPage = (navigate, id, setScreen) => {
    setScreen(3)
    navigate(`/detail/${id}`)
}