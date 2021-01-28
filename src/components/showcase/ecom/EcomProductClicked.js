import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {v4 as uuidv4} from 'uuid'
import StarIcon from '@material-ui/icons/Star';
import { selectUI, setProductClicked, setProductQuantity, setProductShow, setShowcaseMainView } from '../../../redux/UISlice'
import { addToCart } from '../../../redux/EcomSlice';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';


function EcomProductClicked() {
    const dispatch = useDispatch()
    const UI = useSelector(selectUI)
    const productClicked = UI.productClicked.clicked
    const props = UI.productClicked.props
    const toShow = UI.productClicked.toShow
    const quantity = UI.productClicked.props.quantity

    const handleClose=()=>{
        dispatch(setProductQuantity({math:'add', value:1}))
    }

    const handleAddToCart=()=>{
        dispatch(addToCart(props))
    }

    const handleBuyNow=()=>{
        dispatch(addToCart(props))
        dispatch(setShowcaseMainView('ecomCart'))
    }

    return (
        <CSSTransition
        in={productClicked === true}
        timeout={400}
        unmountOnExit
        classNames='EPC__effect'>
            <div className='EPC__main'>
                <div className='EPC__viewPort'>
                    <div className='EPC__imagesContainer'>
                        <div className='EPC__images'>
                        {
                            props.images &&
                            props.images.map((image)=>{
                                return (
                                <img 
                                onClick={()=>{
                                    dispatch(setProductShow(image))
                                }}
                                src={image} alt='product'/>
                                )
                            })
                        }
                        </div>

                        <div className='EPC__image'>
                            <img src={toShow} alt='product' />
                        </div>
                    </div>

                    <div className='EPC__infoContainer'>
                        <div className='EPC__description'>
                            <h2>{props.description}</h2>
                        </div>
                        <div className='EPC__details'>
                            <p>{props.details}</p>
                        </div>
                        <div className='EPC__price'>
                            <h3>&#8369;{props.price && props.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                        </div>
                        <div className='EPC__rating'>
                            <p>rating:</p>
                            {Array(props.rating).fill().map((_,i)=>{
                                return <StarIcon key={uuidv4()}/>
                            })}

                        </div>
                    
                        <div className='EPC__quantity'>
                            <button
                            disabled={quantity === 1}
                            onClick={()=>{
                                dispatch(setProductQuantity({math:'minus', value:1}))
                            }}>
                                -
                            </button>

                            <input 
                            value={quantity}
                            type='number' 
                            onChange={(e)=>{
                                let value = e.target.value
                                dispatch(setProductQuantity({math:'onChange', value:value}))
                            }}
                            />

                            <button
                            onClick={()=>{
                                handleClose()
                            }}>
                                +
                            </button>
                        </div>

                        <div className='EPC__buttonContainer'>
                            <button
                            onClick={()=>{
                                handleAddToCart()
                            }}>Add To Cart</button>

                            <button
                            onClick={()=>{
                                handleBuyNow()
                            }}>Buy Now</button>
                        </div>
                    
                    </div>

                    <div className='EPC__closeButton'>
                        <IconButton
                        onClick={()=>{
                            dispatch(setProductClicked({clicked: false, props:{}, toShow:''}))
                        }}>
                            <HighlightOffIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default EcomProductClicked
