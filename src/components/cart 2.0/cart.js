import React from 'react';
import "./cart.css"
import { Container, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';

import CartItem from './cartitem/cartitem';


const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className='link' to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <div>
      <div className=" container">
        <div className="cart_heading grid grid-five-column">
          <p className='item'>Item</p>
          <p className="price">Price</p>
          <p>Quantity</p>
          <p className="total">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr className='hr' />

        <div className="cart-item" >
{cart.line_items.map((item) => (
  <div  item xs={12} sm={4} key={item.id}> 
      <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} handleEmptyCart={onEmptyCart} />
  

  </div>
)
)}

</div>

        
      </div>
    </div>
    <hr/>

    <div className={'two-button'}>
          <Button className={"emptyButton"} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}> Empty Cart</Button>
          <Button as={Link} to={"/checkout"} className={"checkoutButton"} minWidth="150px" size="large" type="button" variant="contained" color="primary">  Checkout
          
          </Button>
     </div>


    </>
  );

  return (
    <Container>
      <div className='toolbar' style={{marginTop: "100px"}} />
      <Typography className='title' variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;