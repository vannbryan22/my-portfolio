import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../../redux/EcomSlice';
import {v4 as uuidv4} from 'uuid'
import { setProductClicked } from '../../../redux/UISlice';

function EcomTopSeller({props}) {
    const dispatch = useDispatch()

    const id = props.id
    const description = props.description
    const details = props.details
    const images = props.images
    const rating = props.rating
    const price = props.price

    const toAdd = {
        id: id,
        description: description,
        details: details,
        images: images,
        rating: rating,
        price: price,
        quantity: 1
    }

    const handleAddToCart=()=>{
        dispatch(addToCart(toAdd))
    }
    return (
        <div className='ETS'>
            <div className='ETS__image'
            onClick={()=>{
                dispatch(setProductClicked({clicked: true, props: toAdd, toShow:images[0]}))
            }}>
                <img src={images[0]} alt='item'/>
            </div>

            <div className='ETS__description'
            onClick={()=>{
                dispatch(setProductClicked({clicked: true, props: toAdd, toShow:images[0]}))
            }}>
                {description}
            </div>

            <div className='ETS__price'
            onClick={()=>{
                dispatch(setProductClicked({clicked: true, props: toAdd, toShow:images[0]}))
            }}>
                &#8369;{price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div 
            className='ETS__rating'>
                <div 
                onClick={()=>{
                dispatch(setProductClicked({clicked: true, props: toAdd, toShow:images[0]}))
                }}>
                {Array(rating)
                .fill()
                .map((_, i)=>{
                    return <StarIcon key={uuidv4()}/>
                })}
                </div>
                
                <button 
                onClick={()=>{handleAddToCart()}}
                className='ETS__addToCart'>Add to cart</button>
            </div>
        </div>
    )
}

export default EcomTopSeller
