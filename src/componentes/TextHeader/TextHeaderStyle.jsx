import React from "react";
import { styled } from "styled-components";



export const Wrapper = styled.div`
    margin-top: 5.5rem;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: #4C545C;
    text-align: center;   
    font-size: 4.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.75px;
  @media(max-width: 500px){
    margin-bottom: 1.5rem;
  }
    
`
export const Paragraph = styled.p`
    color: #9EABB2;
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem; 
    letter-spacing: 0.15px;
`
