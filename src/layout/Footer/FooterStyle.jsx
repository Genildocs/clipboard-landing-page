import { styled } from "styled-components";

export const ContainerFooter = styled.div`
    background-color: rgba(158, 171, 178, 0.1);   
    height: 15rem;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width:500px){
        flex-direction: column;
        height: 100%;
    }

`

export const ImageLogo = styled.img`
    width: 5.5rem;
    height: 5.5rem; 
    fill: #26BBA4;
    color: #26BBA4;
    margin: 4rem 0;
    
`

export const TextFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width:500px){
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
`

export const Text = styled.a`
    color: #4C545C;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem; /* 166.667% */
    letter-spacing: 0.135px;
    transition: all 0.5s;
    
    @media(max-width:500px){
        text-align: center;
    }

    &:hover {
        color: #26BBA4;
    }
`

export const SocialMedia = styled.div`
    margin-top: 4rem;
`

export const SocialMediaLink = styled.a`

    &:hover{
        color: #26BBA4;
    }

`

export const ImgSocialMedia = styled.img`
    margin-left: 1.5rem;

    @media(max-width:500px){
        margin-left: 4rem;
    }

`