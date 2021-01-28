import React, { useEffect, useRef } from 'react'
import { closeNavigation, selectUI, setActiveRoute, setNavigation, setShowcaseMainView } from '../../redux/UISlice'
import {useDispatch, useSelector} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

function Navigation() {
    const history = useHistory()
    const UI = useSelector(selectUI) 
    const dispatch = useDispatch()
    const navigation = UI.navigation
    const wrapperRef = useRef(null);


    // const calcWidth=(el)=>{
    //     let width = el.offsetWidth
    //     setNavbarWidth(width)
    // }

    const HandleClickedOutside=(ref)=>{
        useEffect(() => {
            const handleClickedAway=(event)=>{
                if(ref.current && !ref.current.contains(event.target)) {
                    dispatch(closeNavigation(false))
                }
            }
            document.addEventListener('mousedown', handleClickedAway)
            return () => {
                document.removeEventListener("mousedown", handleClickedAway);
            }
        }, [ref])
    }

    HandleClickedOutside(wrapperRef);

    return (
        <div className='navigation'
        ref={wrapperRef}>
            <CSSTransition
                in={navigation}
                timeout={400}
                unmountOnExit
                classNames='navigation__barContainer'>
                    <div className='navigation__bar'>
                        <h1
                        onClick={()=>{
                            dispatch(setActiveRoute('Home'))
                            history.push('/')
                            dispatch(closeNavigation(false))
                        }}
                        >Home</h1>
                        <h1
                        onClick={()=>{
                            dispatch(setShowcaseMainView('ecom'))
                            dispatch(closeNavigation(false))
                        }}
                        >Ecommerce</h1>
                        {/* <h1
                        onClick={()=>{
                            dispatch(setShowcaseMainView('gallery'))
                            dispatch(closeNavigation(false))
                        }}
                        >Gallery</h1>
                        <h1
                        onClick={()=>{
                            dispatch(setShowcaseMainView('weather'))
                            dispatch(closeNavigation(false))
                        }}
                        >Weather</h1>
                        <h1
                        onClick={()=>{
                            dispatch(setShowcaseMainView('map'))
                            dispatch(closeNavigation(false))
                        }}
                        >Google Map</h1> */}
                    </div>
            </CSSTransition>
            <div className='navigation__buttonContainer'>
                <button
                    onClick={()=>{
                        dispatch(setNavigation())
                    }}
                >{navigation ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />

                }</button>
            </div>
            
        </div>
    )
}

export default Navigation
