import SearchBar from "./components/SearchBar/SearchBar"
import Footer from "./components/Footer/Footer"
import Loader from "./components/Loader/Loader"
import Card from "./components/Card/Card";
import Recipe, {loader as recipeLoader} from "./components/Recipe/Recipe";
import Error from "./components/Error/Error";
import { useEffect, useState } from "react";
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;  // select spoonacular API KEY for it's use in the API calls
  // react hooks
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // recipes list created mapping on the recipes array.
  let recipeList = recipes.map((r) => <li key={r.id} className="flex items-center justify-center"><Card recipe={r}/></li>); // JSXElements[]

  // app router
  const router = createBrowserRouter([
    {
      path: "/",
      element:  
      <>
        <SearchBar handleSearch={getRecipes}/>
        <main>
          {
            isLoading ?
            <Loader/> :
            recipeList.length > 0 ? <ul className="grid my-10 mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 p-4">{recipeList}</ul> : <Error/>
          }
        </main>
      </>
    },
    {
      path: "/recipe/:id",
      element: 
      <>
              <SearchBar handleSearch={getRecipes}/>
              <Recipe />
      </>,
      loader: recipeLoader
    }
  ]);

  // abort controller for the useeffect cleanup function 
  const controller = new AbortController();

  useEffect(()=>{
    getRecipesRandom(); 
    return () => {
      controller.abort();
  };},[]); 

  // function that fetches random recipes on component mounting
  async function getRecipesRandom() {
    try {
      setIsLoading(true);
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12&tags=vegetarian&addRecipeInformation=true`;
      let res = await axios.get(url);
      setRecipes(res.data.recipes) 
    } catch(e) {
      console.log(`errore!, ${e}`);
    } finally {
      setIsLoading(false);
    }
  }

  // function that fetches recipes based on user input
  async function getRecipes(query) {
    try {
      setIsLoading(true);
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&diet=vegetarian&addRecipeInformation=true&query=${query}`;
      let res = await axios.get(url);
      console.log(res);
      setRecipes(res.data.results);
    } catch (e) {
      console.log(`errore!, ${e}`);
    } finally {
      setIsLoading(false);
    }
  }

  // component render
  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
