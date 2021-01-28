import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectUI, setActiveRoute} from '../redux/UISlice'

function Header() {
    const UI = useSelector(selectUI)
    const history = useHistory()
    const dispatch=useDispatch()
    
    return (
        <div className='header'>

            <div className='header__logoContainer'>
                <img src='/V.png' alt='logo'
                onClick={()=>{
                    dispatch(setActiveRoute('Home'))
                    history.push('/')
                }}/>
            </div>

            <div className='header__navContainer'>
                <ul>
                    <li>
                        <Link to='/'
                        onClick={()=>{
                            dispatch(setActiveRoute('Home'))
                        }} 
                        className='header__aHome' 
                        style={{color:`${UI.activeRoute === 'Home' ? '#f4f4f4': '#0e6cff' }`}}
                        >
                            Home
                        </Link>
                     </li>
                    <li>
                        <Link to='/showcase' 
                        className='header__aShowcase'
                        onClick={()=>{
                            dispatch(setActiveRoute('Showcase'))
                        }}
                        style={{color:`${UI.activeRoute === 'Showcase' ? '#f4f4f4' : '#0e6cff'}`}}
                        >
                            Showcase
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header
