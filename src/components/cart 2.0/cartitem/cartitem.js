import React from 'react';
import './cartitem.css'
import CartAmountToggle from './cartamounttoggle';

//import Container from 'react-bootstrap/Container';
import DeleteIcon from '@mui/icons-material/Delete';


function CartItem({item,onUpdateCartQty, onRemoveFromCart}) {


  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img className='img' src={item.image.url} alt={item.name} />
          </figure>
        </div>
        <div>
          <p>{item.name}</p>
          
        </div>
      </div>
      {/* price   */}
      <div className="cart-price">
        <p>
          {item.price.formatted_with_symbol} 
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        item={item}
        onUpdateCartQty={onUpdateCartQty}
      />

      

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          {item.line_total.formatted_with_symbol} 
        </p>
      </div>

      <div>
        <DeleteIcon className="remove_icon" onClick={() => onRemoveFromCart (item.id)} />
      </div>
    </div>
  );
  
}

export default CartItem