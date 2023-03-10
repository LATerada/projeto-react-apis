import styled from "styled-components";

export const CardContainer = styled.div`
    width: 440px;
    height: 210px;
    border: 1px solid black;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #71C3FF;
    border-radius: 12px;
    border: none;
`
export const PokemonName = styled.p`
    width: 100%;
    /* width: 125px; */
    height: 39px;
    margin-left: 23px;
    margin-top: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
`
export const DetailButton = styled.button`
    width: 74px;
    height: 24px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    background: none;
    border: none;
`
export const AddToPokedexButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    padding: 4px 10px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
`
export const DeleteFromPokedexButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    padding: 4px 10px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
`