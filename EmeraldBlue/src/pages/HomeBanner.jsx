import React from "react";
import "../styles/home_banner.css";
import regalos from "../assets/regalos.jpg";
import regalos2 from "../assets/regalos2.jpg";
import regalos3 from "../assets/regalos3.jpeg";
import { Carousel } from "react-bootstrap";
export default function HomeBanner() {
  return (
    <>
        <Carousel interval={5000} variant="dark">
          <Carousel.Item>
            <img
              style={{ maxHeight: "60vh", objectFit: "cover"}}
              className="d-block w-100 ms-5"
              src={regalos}
              alt="First slide"
            />


          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ maxHeight: "60vh", objectFit: "cover"}}
              className="d-block w-100 mx-auto"
   
              src={regalos2}
              alt="Second slide"
            />

 
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ maxHeight: "60vh", objectFit: "cover"}}
              className="d-block w-100 mx-auto"

              src={regalos3}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
    </>
  );
}
