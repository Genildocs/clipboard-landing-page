import { styled } from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 16rem;

    @media (max-width: 500px){
        flex-direction: column;
        gap: 5rem;
    }
`

export const Images = styled.img`


`