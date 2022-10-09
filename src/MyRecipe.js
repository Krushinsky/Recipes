function MyRecipe({label, image, calories}){
    return(
        <div>
           <h2>{label}</h2>
           <img src={image}/>
           <p>{calories.toFixed()} calories</p>
        </div>
    )
}
export default MyRecipe;