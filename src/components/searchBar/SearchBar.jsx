import React, { useState } from 'react'
import './SearchBar.scss'
import { Link } from 'react-router-dom'


function SearchBar() {

    const types = ["buy", "rent"]
    const [query, setQuery] = useState({
        type:"buy",
        Location:"",
        minPrice:0,
        maxPrice:0
    })

    const switchType = (val) => {
        setQuery((prev) => ({...prev,type:val}))
    }

  return (
    <div className='searchBar'>
        <div className="type">
            {types.map((type) => (
                <button key={type} onClick={() => switchType(type)}
                className={query.type===type? "active":""}>
                    {type}
                </button>
            ))}
        </div>
        <form action="">
            <input type="text" name='location' placeholder='City Location' />
            <input type="number" name='minPrice' min={0} max={10000000} placeholder='Minimum Price' />
            <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Maximum Price' />
            <Link to={'/listpage'}>
            <button><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
            </Link>
            
        </form>
    </div>
  )
}

export default SearchBar