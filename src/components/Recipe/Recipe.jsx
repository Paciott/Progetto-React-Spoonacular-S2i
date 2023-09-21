import { Outlet, Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  let res = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`);
  res = await res.json();
  return res;
}

export default function Recipe() {
  const data = useLoaderData();
  //console.log(data);
  return (
    <div>
      <button><Link to='/'>Fuck go back</Link></button>
      <p>{data.title}</p>
      <img src={data.image} alt="" />
      <small>{data.summary}</small>
      <a href={data.sourceUrl}>Read more</a>
    </div>
  )
}
