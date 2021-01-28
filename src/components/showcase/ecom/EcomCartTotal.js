import React from 'react'
import { useSelector } from 'react-redux'
import { selectEcom } from '../../../redux/EcomSlice'

function EcomCartTotal() {
    const ecom = useSelector(selectEcom)

    const totalItems = ecom.cart.map((item) =>{
        return item.quantity
    })
    .reduce((i, u)=> i + u)

    const totalAmount = ecom.cart.map((item)=>{
        return item.quantity * item.price
    })
    .reduce((i,u)=> i + u)
    .toFixed(2)

    return (
        <div className='ECT'>
            <div className='ECT__orderSummary'>
                <h4>{`Subtotal (${totalItems}):`}</h4>
                <h4>&#8369;{totalAmount}</h4>
            </div>

            <div className='ECT__buttonContainer'>
                <button>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default EcomCartTotal
