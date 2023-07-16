import React from "react"
import styled from "styled-components"



export const Wrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  padding-right: 30rem;
@media (max-width: 1024px){
  padding-right: 0;
}

@media (max-width: 500px){
  flex-direction: column;
  align-items: center;
}
  
`

export const Title = styled.h2`
  color: #4C545C;
  font-family: inherit;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.391px;
  margin-bottom: 0.8px;

  @media (max-width: 500px){
    text-align: center;
    
  }
`
export const Paragraph = styled.p`
  color: #9EABB2;
  font-family: inherit;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.12px;  
  width: 100%;
  max-width: 35rem;

  @media (max-width: 500px){
    text-align: center;
    margin-bottom: 5rem;
  }
`

export const Image = styled.img`
  margin-left: -6rem;
  @media(max-width: 500px){
    margin-left: 0;
    margin-bottom: 5rem;
    max-width: 85%;
  }
`