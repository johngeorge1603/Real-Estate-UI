import React from 'react'
import './HomePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'


function HomePage() {
  return (
    <div className='homepage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Your Dream Home</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium quisquam commodi, officiis fugit, reprehenderit amet distinctio tempore obcaecati magni alias sequi fugiat natus. Earum illum neque nihil odit in?
                </p>
                <SearchBar/> 
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200+</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Properties Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage