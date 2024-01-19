import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
//import Image from 'react-bootstrap/Image';
//import Carousel from 'react-bootstrap/Carousel';
//import {Link} from "react-router-dom"
import { Image } from "react-bootstrap";
//import Button from 'react-bootstrap/Button';
import  Menpic  from './images/manpic.jpg' ;
import kidpic from './images/kid.jpg'
import  Womenpic from './images/ana.jpg'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
import Button from "react-bootstrap/Button";






function SlidingImage() {
  return (
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100 carouselimg primary"
          src={Menpic}
          alt="First slide"
        />
        <Carousel.Caption>
          <Button id='shopnowbutton' > Shop Now </Button>
          <p className="carouseltitle" > Men Sneakers </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 carouselimg"
          src={Womenpic}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Button id='shopnowbutton' > Shop Now </Button>
          <p className="carouseltitle" >Women Sneakers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 carouselimg"
          src={kidpic}
          alt="Third slide"
        />
        <Carousel.Caption>
        <Button id='shopnowbutton'  > Shop Now </Button>
          <p className="carouseltitle">
            Kid Sneakers
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default SlidingImage;

