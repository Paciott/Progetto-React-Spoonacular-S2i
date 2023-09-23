import { useState } from 'react';
import logo from '../../assets/svg/veggies.svg';
import {BiSearchAlt} from 'react-icons/bi'; 
import { useNavigate } from "react-router-dom";

function SearchBar({ handleSearch }) {
  // react hooks
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // handle click used to pop searchbar in mobile view
  function handleClick() {
    setClick(!click);
  }; 

  // close searchbar on submit in mobile view
  function closeMobileMenu() {
    setClick(false);
  };

  // update input value
  function updateSeach(e) {
    setSearch(e.target.value)
  };

  // component render
  return (
		<>
    <div className="z-50 sticky top-0">
      <nav className="w-auto relative flex flex-wrap items-center justify-between p-3 bg-cream">
        <div className="container flex flex-wrap items-center justify-between">
            <div className="w-full flex items-center justify-between md:w-auto">
              <a href="" className='flex flex-row items-center'>
                <div className="text-2xl flex flex-row align-middle">
                  <img src={logo} alt="My Veggie CookBook logo" className="w-9 me-2"/>
                  <h1 className='text-jetblack'>My Veggie CookBook</h1>
                </div>
              </a>
              <button className={"cursor-pointer text-3xl text-jetblack leading-none px-3 block md:hidden outline-none focus:outline-none ml-auto " + ( click ? "border-jetblack border-2 rounded" : "border-0")} onClick={handleClick}><BiSearchAlt/></button>
            </div>
        

          <div className= {'md:flex flex-row items-center justify-center mx-auto max-w-72 ' + (click ? ' flex' : ' hidden')} >
            <form className='p-1.5 w-max' onSubmit={(e)=> {e.preventDefault(); handleSearch(search); navigate('/'); setSearch(''); closeMobileMenu()}}>
                <input type="text"
                       name='search'
                       placeholder='Search for a recipe...'
                       value={search}
                       onChange={(e) => updateSeach(e)}
                       className=' md:w-96 text-verde py-2 pl-3 pr-10 rounded-full font-medium focus:outline-yellow focus:ring-yellow focus:border-yellow' />
                <button className="-ml-8 border-6 bg-transparent w-8 h-8 text-jetblack" type="submit"><BiSearchAlt/></button>
            </form>
          </div>
        </div>

      
      </nav>
    </div>
		</>
  )
}

export default SearchBar