
export const SingleFoodData = ({title,image}) => {
    return (
        <>
         <h1>{title}</h1>
         <img src={image} alt="My Awesome Image"/>
        </>
    )
}