import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipe from './MyRecipe';

function App() {

useEffect ( ()=>{
  async function newRecipe(){
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`)
const data = await response.json()
console.log(data.hits)
setMyRecipes(data.hits)
  }
},[])
  const MY_ID = 'ffadb87e';
  const MY_KEY = '2d5738284d027b1e02354c2b7d0f30a2'

  const [mySearch, setMySearch] = useState('')
  const [myRecipes, setMyRecipes] = useState([]);

  const myRecipeSearch = (e) =>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div >
      <div className = 'container'>
    <form>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value = {mySearch}> 
      </input>
    </form>
      <div className='container'>
        <button>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png " className='icons'/>
        </button>
      </div>
      
      </div>
      {myRecipes.map(element =>(
      <MyRecipe label={element.recipe.label} image={element.recipe.image} calories ={element.recipr.calories}/>
      ))}
    </div>
  );
}

export default App;
