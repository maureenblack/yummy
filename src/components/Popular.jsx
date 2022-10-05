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
    console.log(JSON.stringify(data))
    setPopular(data.categories);
};
   /* <div key={category.idCategory}>
     <p> {category.strCategory}</p>*/

return( 
 <div>
        return(
            <Wrapper>
            <h3>Popular Picks</h3>
            <Splide>
            {popular.map((category) =>{
                return(
                    <SplideSlide> 
                    <Card> 
                    <p>{category.strCategory}</p>
    <img src={category.strCategoryThumb} alt={category.strCategory} />
                    </Card>
                    </SplideSlide>
                );
            })}
            </Splide>
            </Wrapper>
        );
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

img{
    border-radius: 2rem;
}
`;
export default Popular;