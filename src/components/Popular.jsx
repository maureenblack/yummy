/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

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


return( 
 <div>
    {popular.map((category) => {
        return(
            <div key={category.idCategory}>
              <p> {category.strCategory}</p>
            </div>
        );
    })}

    </div>
 );
}
export default Popular;