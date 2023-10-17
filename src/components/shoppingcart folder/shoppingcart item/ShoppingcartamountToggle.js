import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './ShoppingcartamountToggle.css'


  
const ShoppingcartamountToggle = ({ item, onUpdateCartQty }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} >
          <RemoveIcon />
        </button>
        <div className="amount-style">{item.quantity}</div>
        <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
          <AddIcon />
        </button>
      </div>
    </div>
  )
    
}

export default ShoppingcartamountToggle