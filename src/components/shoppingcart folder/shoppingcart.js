import React from "react"
import "./shoppingcart.css"
import Container from '@mui/material/Container';
import { Button } from "@mui/material";

import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

import Shoppingcartitem from "./shoppingcart item/shoppingcart item";

const Shoppingcart = ({cart, handleUpdateCartQty,handleEmptyFromCart, handleUpdateRemoveFromCart}) => {




const EmptyCart = () => (
 <Typography variant="subtitles" > you have no items in your shopping cart,
  <Link to={'/'} className="link"> start adding some </Link>
  </Typography>

)

const FilledCart = () => (
  <>

<div>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr className='hr' />

        <div className="cart-item" >
{cart.line_items.map((item) => (
  <div item xs={12} sm={4} key={item.id}> 
      <Shoppingcartitem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleUpdateRemoveFromCart} handleEmptyFromCart={handleEmptyFromCart} />
  

  </div>
)
)}

</div>

        
      </div>
    </div>
    <hr/>

    <div className={'two-button'}>
          <Button className={"emptyButton"} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyFromCart}> Empty Cart</Button>
          <Button as={Link} to={"/checkout"} className={"checkoutButton"} minWidth="150px" size="large" type="button" variant="contained" color="primary">  Checkout
          
          </Button>
     </div>





    
  </>
 
 )

 if(!cart.line_items) return "...loading"
  return (
    
    <Container>
      <div className={"toolbar"}  >
      <Typography className={"title"} variant="h3"  > your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart/>}
 

      </div>
     

     
     


 
    </Container>

    
  )
}

export default Shoppingcart