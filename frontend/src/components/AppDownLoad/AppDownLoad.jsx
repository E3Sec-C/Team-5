import React from 'react'
import './AppDownLoad.css'
import { assets } from '../../assets/assets'
const AppDownLoad = () => {
  return (
    <div className='app-downlaod' id='app-downlaod'>
        <p>For Better experience Downlaod<br/> FriendlyFeast</p>
        <div className="app-downlaod-platforms">
            <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>
        </div>
      
    </div>
  )
}
export default AppDownLoad
