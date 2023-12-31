import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../card.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Product from "./Product.js"




const Products = ({newReleaseproducts, onAddToCart}) => {



  return (
    <div className='section'>

    <Container style={{height:"80px"}}>
          <Row>
            <Col style={{marginTop:'30px'}}>  <h1 class="text-center font-weight-bold" style={{fontSize: "30"}}> NEW RELEASES </h1> 
            </Col>
            </Row>
            </Container> 
          
            <Container  className="product-card ">
            <Row class="">
          {newReleaseproducts.map((newReleaseproduct) => (
            
                    <div className='Col col-sm-3 col-6 m-auto  my-3 gy-3 ' item key = {newReleaseproduct.id}>
                        <Product newReleaseproduct={newReleaseproduct} onAddToCart = {onAddToCart}/>
 
                    </div>
            

          ))}
          </Row>
          </Container>
    
          <div  style={{position: "absolute",left: "45%"}}>
              <Button variant="dark" style={{height:"50px", fontSize: "14px",
        fontWeight: "bold"}}> SHOP NEW RELEASE </Button>
              </div>
    
        </div>


  )
  }

export default Products