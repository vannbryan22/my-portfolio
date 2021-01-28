import React from 'react'
import { useSelector } from 'react-redux'
import { selectUI } from '../../redux/UISlice'
import Ecom from './ecom/Ecom'
import Gallery from './Gallery'
import Weather from './Weather'
import Map from './Map'
import EcomCart from './ecom/EcomCart'


function ShowcaseMainView() {
    const UI = useSelector(selectUI)
    const mainView = UI.showcaseMainView
    return (
        <div className='SMV'>
            {mainView === 'ecom' && <Ecom />}
            {mainView === 'ecomCart' && <EcomCart />}
            {mainView === 'gallery' && <Gallery />}
            {mainView === 'weather' && <Weather />}
            {mainView === 'map' && <Map />}
        </div>
    )
}

export default ShowcaseMainView
