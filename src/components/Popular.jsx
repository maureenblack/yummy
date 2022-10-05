/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
    const [popular, setPopular] = useState([]);
    
    useEffect(() => {
        getPopular();
    }, []);
    const getPopular = async() =>{
        const api = await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php?apiKey=1`)
    const data = await api.json();
    // console.log(JSON.stringify(data))
    setPopular(data.categories);
};
   /* <div key={category.idCategory}>
     <p> {category.strCategory}</p>*/

return( 
 <div>
            <Wrapper>
            <h3>Popular Picks</h3>
            <Splide
               options={{
                perPage: 4,
                arrows: false,
                drag: 'free',
                gap: "5rem",
               }}
                 >
            {popular.map((category) =>{
                return(
                    <SplideSlide> 
                    <Card> 
                    <p>{category.strCategory}</p>
    <img src={category.strCategoryThumb} alt={category.strCategory} />
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
export default Popular;