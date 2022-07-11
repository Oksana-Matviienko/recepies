import './App.css';
import {useState, useEffect} from "react";
import video from "./food.mp4"
import MyRecepiesComponent from './MyRecepiesComponent';

function App() {
const MY_ID = "1b13d104";
const MY_KEY = "a4bf7d64eb3be93270f7f461f8afb74b";
const [mySearch, setMySearch] = useState('');
const [myRecepies, setMyRecepies] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState ("avocado")

useEffect( async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecepies(data.hits)
  }, [wordSubmitted]);
const myRecepieSearch = (e)=>{
setMySearch(e.target.value)
  }
  const finalSearch =(e)=>{
e.preventDefault();
setWordSubmitted(mySearch);
  }
const finalSearchButton =(e)=>{
  setWordSubmitted(mySearch);
}
  return (
    <div className='App'>
<div className='container'>
<video autoPlay loop muted>
  <source src={video} type="video/mp4"/>
</video>
<h1>Find a recepie</h1>
</div>
<div className='container'>
  <form onSubmit={finalSearch}>
<input className='search' placeholder='Enter the ingredient...' onChange={myRecepieSearch} value={mySearch}>
  </input>
  </form>
</div>
<br></br>
<div className='container'>
  <button onClick={finalSearchButton}>Look for recepie</button>
</div>
{myRecepies.map(element=>(
  <MyRecepiesComponent label={element.recipe.label} 
  image={element.recipe.image} 
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientLines}/>
)
)}
    </div>
  );
}

export default App;
