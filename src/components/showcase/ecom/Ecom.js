import React from 'react'
import { useSelector } from 'react-redux'
import { selectEcom } from '../../../redux/EcomSlice'
import EcomHeader from './EcomHeader'
import EcomItem from './EcomItem'
import {v4 as uuidv4} from 'uuid'
import EcomTopSeller from './EcomTopSeller'
import EcomProductClicked from './EcomProductClicked'

function Ecom() {
    const ecom = useSelector(selectEcom)

    const mostPopular = ecom.products.mostPopular
    const beautyProducts = ecom.products.beautyProducts
    const topSeller = ecom.products.topSeller
    
    return (
        <div className='ecom'>
            <EcomHeader />
            <EcomProductClicked />
            <img 
            className='ecom__banner'
            src='/ecomBackground.jpg' 
            alt='ecom background' />

            <div className='ecom__topSellerContainer'>
                <h3>Top Sellers</h3>
                <div className='ecom__topSellerItems'>
                    {Array.from(topSeller.items).map((item)=>{
                        return <EcomTopSeller key={uuidv4()} props={item} />
                    })
                    }
                </div>
            </div>

            <div className='ecom__mostPopularContainer'>
                <h3>Most Popular</h3>
                <div className='ecom__mostPopularItems'>
                    {Array.from(mostPopular.items).map((item)=>{
                        return <EcomItem key={uuidv4()} props={item}/>
                    })
                    }
                </div>
            </div>
            
            <div className='ecom__beautyProductsContainer'>
                <h3>Top Beauty & Personal Care products</h3>
                <div 
                reverseScroll={true}
                className='ecom__beautyProductItems'>
                    {Array.from(beautyProducts.items).map((item)=>{
                        return <EcomItem key={uuidv4()} props={item}/>
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default Ecom
