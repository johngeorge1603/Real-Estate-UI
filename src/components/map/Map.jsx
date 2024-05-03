import React from 'react'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from '../pin/Pin'


function MyMap({item}) {
  return (
        <MapContainer center={[51.5072, 0.1276]} zoom={7} scrollWheelZoom={false} className='map'>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {item.map(item=>(
            <Pin item={item} key={item.id}/>
        ))}
        </MapContainer>
  )
}

export default MyMap
