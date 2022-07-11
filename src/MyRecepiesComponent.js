
function MyRecepiesComponent ({label, image, calories, ingredients}){

   return(
      <div>
         <div className="container">
         <h2>{label}</h2>
         </div>
<div className="container">
   <img src={image} alt="recepie" className="image"/>
</div>
<div className="container">
   <p>Calories: {calories.toFixed()} cal.</p>
</div>

<ul className="list">
   {ingredients.map(item=>(
   <li><img src={"https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-check-multimedia-kiranshastry-gradient-kiranshastry.png"} width="40px"/>{item}</li>
))}
</ul>
      </div>
   )
}
export default MyRecepiesComponent;