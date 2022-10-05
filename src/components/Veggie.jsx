import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  
  useEffect(() => {
    fetch ('http://localhost:8000/vegetarians')
    .then(res=>res.json())
    .then(data=> setVeggie(data))
  }, []);



  return (
    <div>
    <Wrapper>
    <h3>Vegetarian Picks</h3>
    <Splide
       options={{
        perPage: 3,
        arrows: false,
        drag: 'free',
        gap: "5rem",
       }}
         >
    {veggie.map((vegetarian) =>{
        return(
            <SplideSlide key={vegetarian.idMeal}> 
            <Card> 
            <p>{vegetarian.strMeal}</p>
<img src={vegetarian.strMealThumb} alt={vegetarian.strMeal} />
          <Gradient /> 
            </Card>
            </SplideSlide>
        );
    })}
    </Splide>
    </Wrapper>
</div>
  );
  }
const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object fit: cover;
}
p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgha(0,0,0,0), rgba (0,0,0,0.5));
`;
export default Veggie