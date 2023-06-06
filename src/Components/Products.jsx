import React from 'react'
import { useState } from 'react';
import '../index.css';
// import Data from './Data';
import Product from './Product';


const Products = ({data, addtoCart}) => {

  const dis_none = {
    opacity: '0'
  };
  const dis_block = {
    opacity: '1'
  };

  return (
    <>
        <div id='products'>
            <h1>Best interior plants</h1>
            <p>Rectangle follower library hand ellipse device strike through.</p>

            <div className="items">
                    {data.map((item)=>{
                        return <Product addtoCart={addtoCart} name={item.name} id={item.id} img={item.img} price={item.price} />
                    })}
            </div>
        </div>
    </>
  )
}

export default Products
