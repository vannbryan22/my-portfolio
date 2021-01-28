import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductClicked, setShowcaseMainView } from '../../../redux/UISlice'
import SearchIcon from '@material-ui/icons/Search';
import { selectEcom } from '../../../redux/EcomSlice';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function EcomHeader() {
    const ecom = useSelector(selectEcom) 
    const dispatch = useDispatch()
    return (
        <div className='ecomHeader'>
            <div className='ecomHeader__logoContainer'>
                <img src='/V-black.png' alt='logo'
                onClick={()=>{
                    dispatch(setShowcaseMainView('ecom'))
                    dispatch(setProductClicked({clicked: false, props:{}, toShow:''}))
                }}/>
            </div>
            <div className='ecomHeader__searchContainer'>
                <input 
                placeholder='Search'
                autoComplete='true'
                type='text'>
                    
                </input>
                <div className='ecomHeader__searchIcon'>
                    <SearchIcon />
                </div>
            </div>
            <div className='ecomHeader__nav'>
                <div 
                onClick={()=>{
                    dispatch(setShowcaseMainView('ecomCart'))
                    dispatch(setProductClicked({clicked: false, props:{}, toShow:''}))
                }}
                className='ecomHeader__navCartContainer'>
                    <span>{ecom.cart.length}</span>
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default EcomHeader
