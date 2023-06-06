import React from 'react'

const Cart = ({cart, removeItem, clearItem}) => {

  return (
    <>
        <h1 style={{textAlign:'center', background:'royalblue', color:'white'}}>Your Cart -: </h1>
        <br /><br />
      <div style={{display:'flex', padding:'0 5vw', columnGap:'30px'}}> 
          {
                
            (cart.length!=0) ?

            cart.map((item)=>{
                  return (
                        <div style={{textAlign:'center', width:'220px', padding:'0 20px'}}>
                              <img src={item.img} style={{width:'100%'}} />
                              <h3>{item.name}</h3>
                              <p><strike>$150</strike>  ${item.price}</p>
                              <button onClick={()=> removeItem(item.id)} style={{fontFamily:'"rubik", sans-serif',width:'100%', padding:'8px', background:'orangered', marginTop:'7px',borderRadius:'7px', color:'white', border:'none', fontSize:'15px'}}>Remove</button>
                        </div>
                  )
            }) :

            <h1>Your Cart Is Empty.</h1>

          }
      </div>
          <br /><br />
      <div style={{padding:'10px 3vw', background:'lightgray', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                  <h1>Total Price -: </h1> 
                  <p>{  cart.map(item => item.price).reduce((total, value) => total + value, 0)  }</p>
            </div>
            <button onClick={()=>clearItem()} style={{fontFamily:'"rubik", sans-serif',width:'150px', padding:'12px', background:'royalblue', marginTop:'7px',borderRadius:'7px', color:'white', border:'none', fontSize:'16px'}}>Clear Cart</button>
      </div>  
      </>
  )
}

export default Cart
