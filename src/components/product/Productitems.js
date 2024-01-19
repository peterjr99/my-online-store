import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

//import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../card.css"




function Productitems(props) {

    
return (
    
    <Card  className='card-product ' style={{  backgroundColor:'gray' }}>
       
    <Card.Img variant="top" src={props.src} alt={props.name}/>
   <div className='card-buttons'>
    <button type="button" className="btn addtocart "  onClick={() => props.onAddToCart(props.id, 1)}>
      <i className="shoppingbag-button"> {<ShoppingBagIcon/>} </i> 
     </button>
     <button type="button" className="btn addtolikes  ">
      <i className="like-button"> {<FavoriteIcon/>} </i> 
     </button>
     </div>
    <Card.Body style={{background:"white"}}>
      <Card.Title> {props.name} </Card.Title>
      <Card.Text>
      {props.price}
      </Card.Text>
      </Card.Body>
  </Card> 
  )
}

export default Productitems