import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEcom } from '../../../redux/EcomSlice'
import EcomCartItem from './EcomCartItem'
import EcomHeader from './EcomHeader'
import {v4 as uuidv4} from 'uuid'
import { setShowcaseMainView } from '../../../redux/UISlice'
import EcomCartTotal from './EcomCartTotal'

function EcomCart() {
    const ecom = useSelector(selectEcom)
    const dispatch = useDispatch()

    const cart = ecom.cart
    return (
        <div className='ecomCart'>
            <EcomHeader />
            <div className='ecomCart__mainView'>
                {cart.length <= 0 ?
                    <div className='ecomCart__noItemContainer'>
                    <h4 className='ecomCart__noItem'>
                        There are no items in this cart
                    </h4>
                    <button
                    onClick={()=>{
                        dispatch(setShowcaseMainView('ecom'))
                    }}
                    className='ecomCart__noItemButton'>
                        CONTINUE SHOPPING
                    </button>
                    </div>
                    :
                    <>
                    <div className='ecomCart__itemsContainer'>
                        {cart.map((item)=>{
                            return <EcomCartItem key={uuidv4()} props={item} />
                        })
                        }
                    </div>

                    <div className='ecomCart__checkOutContainer'>
                        <EcomCartTotal />
                    </div>
                    </>    
                }
                
            </div>

        </div>
    )
}

export default EcomCart
