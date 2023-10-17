import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

//import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../card.css"




function Product({newReleaseproduct, onAddToCart}) {

    
return (
    
    <Card  className='card-product ' style={{  backgroundColor:'gray' }}>
       
    <Card.Img variant="top" src={newReleaseproduct.image.url} alt={newReleaseproduct.name}/>
   <div className='card-buttons'>
    <button type="button" class="btn addtocart "  onClick={() => onAddToCart(newReleaseproduct.id, 1)}>
      <i class="shoppingbag-button"> {<ShoppingBagIcon/>} </i> 
     </button>
     <button type="button" class="btn addtolikes  ">
      <i class="like-button"> {<FavoriteIcon/>} </i> 
     </button>
     </div>
    <Card.Body style={{background:"white"}}>
      <Card.Title> {newReleaseproduct.name} </Card.Title>
      <Card.Text>
      {newReleaseproduct.price.formatted_with_symbol}
      </Card.Text>
      </Card.Body>
  </Card> 
  )
}

export default Product