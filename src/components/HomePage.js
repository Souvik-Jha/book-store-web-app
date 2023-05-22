import React, { useEffect, useState } from "react";

import { SingleFoodData } from "./SingleFoodData";

const HomePage = () => {
    const [evenClicked, setEvenClicked] = useState(false);
   const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        fetchUrl()
    },[])

    const fetchUrl = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
         .then((res) => res.json())
         .then((data) => setFoodData(data.meals))
    }

    // fetchUrl()
    console.log(foodData)
    return (
        <div>
            <p style={{ color: !evenClicked ? 'green' : 'blue' }}>Souvik</p>
            <button onClick={() => setEvenClicked(!evenClicked)}>Click me</button>
            <div>
                {
                    foodData.length !==0 ? 
                        <div>
                            {
                                foodData.map((item) => {
                                    return (
                                        <div>
                                            <SingleFoodData title={item.strMeal} image={item.strMealThumb} />
                                        </div>
                                    )
                                })
                            }
                        </div> : 
                        null
                }
            </div>
        </div>
    )
}

export default HomePage
