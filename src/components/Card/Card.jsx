import { Link } from "react-router-dom";
import striptags from 'striptags';


function Card({recipe}) {
// list of recipe tags, created mapping on the 'diets' property of the recipe object 
let diets = recipe.diets.map((d, i) => <span className="border px-1 m-1 border-rosewater rounded italic text-rosewater transition duration-150 ease-in-out hover:scale-105" key={i}>{d}</span>)

// component render
  return(
    <div className="w-8/12 rounded-lg shadow-xl min-h-full flex flex-col justify-between content-evenly transition duration-150 ease-in-out hover:-translate-y-1">
      <div>
        <img src={recipe.image} alt="recipe image" className="rounded-t-lg w-full bg-center bg-no-repeat bg-cover" />
        <h2 className="text-xl py-3 mx-3 text-center tracking-wide border-b text-bluishblack">{recipe.title}</h2>
        <p className="flex flex-wrap px-3 text-sm my-3">{diets}</p>
      </div>
      <div className="px-5 pb-3 flex flex-col items-center">
        <p className="line-clamp-4 text-grey leading-relaxed my-3">{striptags(recipe.summary)}</p>
        <button className="bg-yellow text-white font-semibold border border-yellow rounded-full px-3 py-2 my-4 uppercase transition duration-150 ease-in-out hover:border-jetblack hover:scale-105"><Link to={`/recipe/${recipe.id}`}>Explore This Recipe</Link></button>
      </div>
    </div>
  )
}

export default Card;