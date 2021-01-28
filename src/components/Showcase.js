import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveRoute } from '../redux/UISlice'
import Navigation from './showcase/Navigation'
import ShowcaseMainView from './showcase/ShowcaseMainView'

function Showcase() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setActiveRoute('Showcase'))
    }, [])
    return (
        <div className='showcase'>
            <Navigation />
            <ShowcaseMainView />
        </div>
    )
}

export default Showcase
