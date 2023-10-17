import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './navbar.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import SearchIcon from '@mui/icons-material/Search';
import {Link, useLocation} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';





function Navbarrr({totalItems}) {
  const location = useLocation();
  
 
 

  

//sneaker hover
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}

 //account hover
const [shows, setShows] = useState(false);
const showDropdowns = (e)=>{
    setShows(!shows);
}
const hideDropdowns = e => {
    setShows(false);
}

// navbar scroll color change

const [fix, setFix] = useState(false)

function handleScroll(){
if(window.scrollY >= 500){
setFix(true)
}else{
setFix(false)
}
}
window.addEventListener("scroll", handleScroll)




  return (
    

    <div>

<nav className={ fix ? "navbar_fixed navbar navbar-expand-lg fixed-top navbar-light fix" : "navbar navbar-expand-lg fixed-top navbar-light fix "}>
  <div class="container-fluid" >
    <i class="navbar-brand" > </i>
    <div class='icons order-lg-2'>
    { location.pathname === "/" ? (
    
    <Link to="/cart">
    
       <button type="button" class="btn position-relative ">
       <i class="icon shopping cart"> {<ShoppingBagIcon/>} </i>
       <span class='position-absolute top-0 start-100 translate-middle badge bg-primary'> {totalItems} </span>

       </button>

       </Link>) : null }

       <button type="button" class="btn position-relative ">
       <Link to=""></Link>
       <i class="icon favorite"> {<FavoriteIcon/>} </i>
       <span class='position-absolute top-0 start-100 translate-middle badge bg-primary'>9</span>

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
                <NavDropdown  id="navtext" title="SNEAKERS"  onMouseEnter={showDropdown} onMouseLeave={hideDropdown} show={show} >
                <NavDropdown.Item as={Link} to={""}>AIR JORDAN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={""}>NIKE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={""}>YEEZY</NavDropdown.Item>
    
    
                </NavDropdown>
    
    
    
                <Nav.Link className={"navtext"} as={Link} to={""}>APPAREL</Nav.Link>
                
                <NavDropdown title="ACCOUNT" id="navtext" onMouseEnter={showDropdowns} onMouseLeave={hideDropdowns} show={shows}>
                  <NavDropdown.Item as={Link} to={""}>LOGIN</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={""}>SIGN UP</NavDropdown.Item>
                  
                  
                  
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

export default Navbarrr