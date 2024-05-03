import React from 'react'
import Card from '../card/Card'
import { listData } from '../../library/dummydata'
import "./MyList.scss"

function MyList() {
  return (
    <div className='mylist'>
        {listData.map(item => (
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default MyList