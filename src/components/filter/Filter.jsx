import React from 'react'
import './Filter.scss'

function Filter() {
  return (
    <div className='filter'>
        <h1>Search Result for <b>London</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" name="city" id="city" placeholder='City Location'/>
            </div>
        </div>

        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property" id="property">
                    <option value="">Any</option>
                    <option value="room">Room</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" name="minPrice" id="minPrice" placeholder='Any'/>
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" name="maxPrice" id="maxPrice" placeholder='Any'/>
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input type="text" name="bedroom" id="bedroom" placeholder='Any'/>
            </div>
            <button><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </div>
    </div>
  )
}

export default Filter