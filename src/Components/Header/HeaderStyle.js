import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    background-color: white;
`

export const PokemonTitle = styled.h1`
    grid-column: 2;
`

export const PokedexButton = styled.button`
    width: 287px;
    height: 74px;
    padding: 4px 10px;
    background: #33A4F5;
    border: none;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
`

export const PokemonListButton = styled.button`
    grid-column: 1;
    width: 60%;
    text-decoration-line: underline;
    border: none;
    background: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    font-family: 'Poppins';
`

export const DeleteFromPokedexButton = styled.button`
    width: 226px;
    height: 57px;
    padding: 4px 10px;
    background: #FF6262;
    color: white;
    border: none;
    border-radius: 8px;

`