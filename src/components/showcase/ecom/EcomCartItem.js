import React from 'react'
import {v4 as uuidv4} from 'uuid'
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Tooltip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteToCart, quantityChange } from '../../../redux/EcomSlice';


function EcomCartItem({props}) {
    const dispatch = useDispatch()

    const description = props.description
    const details = props.details
    const images = props.images
    const price = props.price
    const rating = props.rating
    const quantity = props.quantity

    const handleDeleteToCart=()=>{
        dispatch(deleteToCart(props))
    }

    const handleQuantityChange=(math,value)=>{
        if(math === 'add'){
            dispatch(quantityChange({math:'add', value:value, props:props}))
        }else if(math === 'minus'){
            dispatch(quantityChange({math:'minus', value:value, props:props}))
        }else if(math === 'onChange'){
            dispatch(quantityChange({math:'onChange', value:value, props:props}))
        }
    }

    return (
        <div className='ECI'>
            <div className='ECI__imageContainer'>
                <img src={images[0]} alt='item' />
            </div>
            <div className='ECI__infoContainer'>

                <div className='ECI__infoDetailsContainer'>
                    <p className='ECI__infoDescription'>{description}</p>
                    <p className='ECI__infoDetails'>{details}</p>
                    
                    <div className='ECI__infoRating'>
                        {Array(rating)
                            .fill()
                            .map((_,i)=>{
                                return <StarIcon key={uuidv4()}/>
                            })
                        }
                    </div>
                    
                </div>
                
                <div className='ECI__infoPriceContainer'>
                    <div className='ECI__infoPrice'>
                        <p>&#8369;{price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        
                    </div>
                    
                    <div className='ECI__removeToCart'>
                        <IconButton
                        onClick={()=>{handleDeleteToCart()}}>
                            <DeleteIcon />
                        </IconButton>
                    </div>

                    <div className='ECI__infoQuantity'>
                        <button
                        disabled={quantity === 1}
                        onClick={()=>{
                            handleQuantityChange('minus',1)
                        }}>-</button>
                        <Tooltip title="Press enter key after entering the value" aria-label="add">
                            <input 
                            defaultValue={quantity}
                            type='number' 
                            onKeyUp={(e)=>{
                                let value = e.target.value
                                if(e.key === 'Enter'){
                                    handleQuantityChange('onChange',value)
                                }
                            }}
                            />
                        </Tooltip>
                        <button
                        onClick={()=>{
                            handleQuantityChange('add',1)
                        }}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcomCartItem
