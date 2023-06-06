import React from 'react'
import { useState } from 'react'
import '../index.css'

const Product = (props) => {

    const dis_none = {
        // display: 'none'
        opacity: '0'
    };
    const dis_block = {
        // display: 'block'
        opacity: '1'
    };

    const[hover, setHover] = useState(dis_none);

  return (
    <>
        <div id='product'>
                <div onMouseEnter={()=>{ setHover(dis_block)}} onMouseLeave={()=>setHover(dis_none)}>
                    <img src={props.img} />
                    <h3>{props.name}</h3>
                    <p><strike>$131</strike> ${props.price}</p>
                </div>
                <i class="fa-regular fa-heart" id='cartIcon' onClick={()=> props.addtoCart(props)} onMouseOver={()=>{ setHover(dis_block)}} style={hover} onMouseLeave={()=>setHover(dis_none)} ></i>
        </div>
    </>
  )
}

export default Product
