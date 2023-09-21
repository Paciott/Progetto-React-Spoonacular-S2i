import { Link } from "react-router-dom";
import striptags from 'striptags';


function Card({recipe}) {
let diets = recipe.diets.map((d, i) => <span className="border px-1 m-1 border-rosewater rounded italic text-rosewater transition duration-150 ease-in-out hover:scale-105" key={i}>{d}</span>)

  return(
    <div className="w-8/12 rounded-lg shadow-xl min-h-full flex flex-col justify-between content-evenly transition duration-150 ease-in-out hover:-translate-y-1">
      <div>
        <img src={recipe.image} alt="recipe image" className="rounded-t-lg w-full bg-center bg-no-repeat bg-cover" />
        <h2 className="text-xl p-3 text-center">{recipe.title}</h2>
      </div>
      <p className="flex flex-wrap px-3">{diets}</p>
      <div className="px-3 pb-3">
        <p className="line-clamp-4 text-grey">{striptags(recipe.summary)}</p>
        <button className="bg-yellow text-white font-semibold border border-yellow italic rounded my-2 p-1 uppercase transition duration-150 ease-in-out hover:border-jetblack"><Link to={`/recipe/${recipe.id}`}>Explore This Recipe</Link></button>
      </div>
    </div>
  )
}

export default Card;