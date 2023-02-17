import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
`

export const PokemonTitle = styled.h1`
    grid-column: 2;
`

export const PokedexButton = styled.button`
    width: 60%;
`