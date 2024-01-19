import React from 'react'
import './navbarforall.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Navbarforall(props) {
  return (



  
    

    <div>

<nav className={  "navbar navbar-expand-lg navbar-light fix "}>
  <div className="container-fluid" >
  
    <i className="navbar-brand" >
    <Link to='/' style={{textDecoration: 'none'}}>
    <h1 className='logo'> shoe clubs </h1>
    </Link>
     </i>
     
    <div className='icons order-lg-2'>
    
    
    <Link to="/cart">
    
       <button type="button" className="btn position-relative ">
       <i className="icon-shopping-cart " style={{color:'black'}}> {<ShoppingBagIcon/>} </i>
       <span className='position-absolute top-0 start-100 translate-middle badge bg-primary'> {props.cartNum} </span>

       </button>

       </Link>

       <button type="button" className="btn position-relative ">
       <Link to="/womenshoes"></Link>

       </button>

       <button type="button" className="btn position-relative ">
       <i className="icon searchIcon">  </i>
       

       </button>


       
    </div>
    <button className="navbar-toggler ms auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <Navbar.Collapse id="navbarScroll" >
    <Nav
                className="mx-auto my-2 my-lg-0 " 
                
                style={{ maxHeight: '100px'
                 }}

                 
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"} className="navtext2 ">HOME</Nav.Link>
                <NavDropdown  id="navtext2" title="SNEAKERS"   >
                <NavDropdown.Item className='sneakersdropitem' as={Link} to={"/air-jordan"}>AIR JORDAN</NavDropdown.Item>
                <NavDropdown.Item className='sneakersdropitem' as={Link} to={"/nike"}>NIKE</NavDropdown.Item>
                <NavDropdown.Item className='sneakersdropitem' as={Link} to={"/yeezy"}>YEEZY</NavDropdown.Item>
    
    
                </NavDropdown>
    
    
    
                <Nav.Link className={"navtext2"} as={Link} to={"/apparel"}>APPAREL</Nav.Link>
                
                <NavDropdown title="ACCOUNT" id="navtext2" >
                  <NavDropdown.Item className='accountdropitem' as={Link} to={"/login"}>LOGIN</NavDropdown.Item>
                  <NavDropdown.Item className='accountdropitem' as={Link} to={"/sign-up"}>SIGN UP</NavDropdown.Item>
                  
                  
                  
                </NavDropdown>
                
                
              </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
    
    
    
    </div>
    
</nav>


    </div>


    
  )
}

export default Navbarforall