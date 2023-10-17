import React from 'react'
import "./app.css"
import "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
  return (
    <Container fluid >
  <Row>
    <Col className="headingdiv">
    
       <span className='heading text-center'>  You’ve got questions,</span> 
        <span className='subheading '>  We’ve got answers </span>
      
    
    </Col>
  </Row>
</Container>
    
  )
  
}

export default Header