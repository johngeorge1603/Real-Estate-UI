import React from 'react'
import './ListPage.scss'
import { listData } from '../../library/dummydata'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import MyMap from '../../components/map/Map'


 

function ListPage() {

    const data = listData
  return (
    <div className='listpage'>

        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
                {data.map(item => (
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>

        <div className="mapContainer">
            <MyMap item={data}/>
        </div>

    </div>
  )
}

export default ListPage