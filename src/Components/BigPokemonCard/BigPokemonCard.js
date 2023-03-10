const BigPokemonCard = (props) => {
    console.log(props.pokemon.types)
    return(
        <>
            <img src={props.pokemon.sprites.other["official-artwork"].front_default} alt="Imagem do Pokemon"/>
            <p>{props.pokemon.name}</p>
            <p>{props.pokemon.types[0].type.name}</p>
            { props.pokemon.types.length > 1 ? <p>{props.pokemon.types[1].type.name}</p> : ""}

        </>

    )

}
export default BigPokemonCard
