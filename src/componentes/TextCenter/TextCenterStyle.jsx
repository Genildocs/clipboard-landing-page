import React from "react";
import {styled} from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15rem;

`


export const Title = styled.h2` 
  margin-bottom: 2rem;
  color: #4C545C;
  text-align: center;  
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.587px;
    
`

export const Text = styled.p`
  color: #9EABB2;
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem; /* 166.667% */
  letter-spacing: 0.135px;
  width: 100%;
  max-width: 73rem;
`