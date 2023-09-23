import { Link, useLoaderData } from "react-router-dom";
import striptags from 'striptags';
import axios from "axios";
import DOMPurify from 'dompurify';
import arrow from '../../assets/svg/arrow-left.svg';

// recipe loader
export async function loader({ params }) {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  let res = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`);
  return res;
}

// recipe component
export default function Recipe() {
  // use loader
  const data = useLoaderData();
  // create list of recipe tags by mapping on the array of 'diets'
  let diets = data.data.diets.map((d, i) => <span className="border px-1 m-1 border-rosewater rounded italic text-rosewater transition duration-150 ease-in-out hover:scale-105" key={i}>{d}</span>);
  // create list of ingredients by mapping on the array of 'extendedIngredients'
  let ingredients = data.data.extendedIngredients.map((i, index) => <li key={index} className="font-medium text-grey">- {i.name}</li>);
  // recipe instructions, sometimes it is straight HTML so we have to dangerously render it in a tag. That's wy we use a purifier (in this case DOMPurify)
  let instructions = data.data.instructions;

  // component render
  return (
    <>
      <div className="m-5 ">
        <button><Link to='/' className="flex justify-center items-center text-lg bg-rosewater text-white rounded-full p-3 uppercase transition duration-150 ease-in-out hover:bg-bluishblack "><img src={arrow} alt="left arrow" className=" w-9 h-9 pr-2"/>Back To Recipes</Link></button>
      </div>

      <div className="flex flex-col align-center justify-center px-3 pb-9 w-full max-w-6xl mx-auto">
        <div>
          <img src={data.data.image} alt="recipe image" className="rounded-full w-10/12 h-10/12 sm:w-2/3 sm:h-2/3 md:w-2/4 md:h-2/4 mx-auto" />
          <h2 className="text-center text-3xl p-4 text-bluishblack">{data.data.title}</h2>
          <p className="flex flex-wrap px-3 text-sm justify-center items-center my-3">{diets} </p>
        </div>
        <div className="mx-5">
          <h3 className="text-lg font-bold uppercase border-b-2 border-yellow text-bluishblack my-3">Presentation:</h3>
          <p className="leading-loose my-6">{striptags(data.data.summary)}</p>
        </div>
        <div className="mx-5 bg-cream rounded">
          <h3 className="text-lg font-bold uppercase border-b-2 border-yellow text-bluishblack my-3">Ingredients:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 p-4 my-6">
            {ingredients}
          </ul>
        </div>
        <div className="mx-5">
          <h3 className="text-lg font-bold uppercase border-b-2 border-yellow my-3 text-bluishblack">Instructions:</h3>
          <section className="leading-loose my-6" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(instructions)}}></section>
        </div>
        <a href={data.data.spoonacularSourceUrl} target="_blank" className="flex mx-5 my-3 border rounded-full bg-yellow text-white underline max-w-md px-3 py-2 transition duration-150 ease-in-out hover:bg-bluishblack ">Read more details about this recipe</a>
      </div>

    </>

  )
}
