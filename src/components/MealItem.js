import { React, useState, useEffect } from "react";

const MealItem = () => {
    const [mealItemArr, setMealItemArr] = useState([])
    //const [foodItem,setFooditem] = useState("")
    const [searchLetter, setSearchletter] = useState("a")
    const [caregery,setCategory] = useState("")
    const [ingredient,setIngredient] = useState("")
    const [ares,setArea] = useState("")
    const [categoriesList, setCategoriesList] = useState([])
    const [filterList, setFilterList] = useState([])
    const [areaList, setAreaList] = useState([])
    const [ingredientList, setIngredientList] = useState([])

    useEffect(() => {
        fetchUrl()
    }, [])

    const fetchUrl = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then((res) => res.json())
            .then((data) => setMealItemArr(data.meals))
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    const fetchCategory = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then((res) => res.json())
            .then((data) => setCategoriesList(data.meals))
    }

    useEffect(() => {
        fetchArea()
    }, [])
    const fetchArea = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then((res) => res.json())
            .then((data) => setAreaList(data.meals))
    }
    useEffect(() => {
        fetchIngredient()
    }, [])
    const fetchIngredient = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            .then((res) => res.json())
            .then((data) => setIngredientList(data.meals))
    }


    const getFoodItemHandler = (e) => {
        e.preventDefault()

        try {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.meals)
                    if (data.meals === null) setMealItemArr([])
                    else setMealItemArr(data.meals)
                })
        } catch (err) {
            console.log(err.message)
        }

    }

    let changeSearchLetter = (event) => {
        setSearchletter(event.target.value)
    }

    // useEffect(() => {
    //     fetchFilterItem()
    // }, [caregery])
    // const fetchFilterItem = () => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${caregery}`)
    //         .then((res) => res.json())
    //         .then((data) => setFilterList(data.meals))
    //         console.log(filterList)
    // }


        return (
            <>
                <form>
                    <input type="text" onChange={changeSearchLetter} value={searchLetter} ></input>
                    <button onClick={getFoodItemHandler}>Submit</button>
                </form>

                <div>
                    <div>{mealItemArr.length > 0 ? (
                        mealItemArr.map((item, index) => (<div key={index}>{item.strMeal}</div>))
                    ) : null}</div>
                </div>


                <label>Category</label>
            <select onChange={(e)=>{setCategory(e.target.value)}} >
                {categoriesList.map((item,index) => (<option  key={index}>{item.strCategory}</option>))}

            </select>
            <label>Area</label>
            <select onChange={(e)=>{setArea(e.target.value)}}>
                {areaList.map((item, index) => (<option  key={index}>{item.strArea}</option>))}
            </select>
            <label>Ingredient</label>
            <select onChange={(e)=>{setIngredient(e.target.value)}}>
                {ingredientList.map((item, index) => (<option  key={index}>{item.strIngredient}</option>))}
            </select>

            </>
        )
    
}

export default MealItem