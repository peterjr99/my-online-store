import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Productitem from '../../src/components/product/Productitems'

function Yeezy(props) {
  return (
    
<div className='section'>

<Container style={{height:"80px"}}>
      <Row>
        <Col style={{marginTop:'30px'}}>  <h1 class="text-center font-weight-bold" style={{fontSize: "30"}}> Yeezy </h1> 
        </Col>
        </Row>
        </Container> 
      
        <Container  className="product-card ">
        <Row className="">

        {props.yeezyCategories.map((yeezy) => (
        
        <div className='Col col-sm-3 col-6 m-auto  my-3 gy-3 ' key = {yeezy.id}>
           <Productitem 
           src={yeezy.image.url} 
           alt={yeezy.name} 
           onAddToCart={props.onAddToCart} 
           id={yeezy.id}
           name={yeezy.name}
           price={yeezy.price.formatted_with_symbol}
           />

        </div>
        ))}
      
      </Row>
      </Container>

      <div  style={{position: "absolute",left: "45%"}}>
          <Button variant="dark" style={{height:"50px", fontSize: "14px",
    fontWeight: "bold"}}> SHOP Yeezy </Button>
          </div>

    </div>


  )
}

export default Yeezy