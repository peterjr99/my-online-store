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



function Navbarforall() {
  return (



  
    

    <div>

<nav className={  "navbar navbar-expand-lg navbar-light fix "}>
  <div class="container-fluid" >
    <i class="navbar-brand" >Navbar w/ text </i>
    <div class='icons order-lg-2'>
    
    
    <Link to="/cart">
    
       <button type="button" class="btn position-relative ">
       <i class="icon shopping cart"> {<ShoppingBagIcon/>} </i>
       <span class='position-absolute top-0 start-100 translate-middle badge bg-primary'> {} </span>

       </button>

       </Link>

       <button type="button" class="btn position-relative ">
       <Link to="/womenshoes"></Link>

       </button>

       <button type="button" class="btn position-relative ">
       <i class="icon searchIcon">  </i>
       

       </button>


       
    </div>
    <button class="navbar-toggler ms auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <Navbar.Collapse id="navbarScroll" >
    <Nav
                className="mx-auto my-2 my-lg-0 " 
                
                style={{ maxHeight: '100px'
                 }}

                 
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"} className="navtext ">HOME</Nav.Link>
                <NavDropdown  id="navtext" title="SNEAKERS"   >
                <NavDropdown.Item as={Link} to={"/air-jordan"}>AIR JORDAN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/nike"}>NIKE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/yeezy"}>YEEZY</NavDropdown.Item>
    
    
                </NavDropdown>
    
    
    
                <Nav.Link className={"navtext"} as={Link} to={"/apparel"}>APPAREL</Nav.Link>
                
                <NavDropdown title="ACCOUNT" id="navtext" >
                  <NavDropdown.Item as={Link} to={"/login"}>LOGIN</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/sign-up"}>SIGN UP</NavDropdown.Item>
                  
                  
                  
                </NavDropdown>
                
                
              </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    
    
    
    </div>
    
</nav>


    </div>


    
  )
}

export default Navbarforall