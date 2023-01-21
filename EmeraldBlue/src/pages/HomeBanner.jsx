import React from "react";
import "../styles/home_banner.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { Carousel } from "react-bootstrap";
export default function HomeBanner() {
  const estilo = {
    objectFit: "cover",
    width: "100%",
    height: "50%"
  }
  return (
    <>
        <Carousel interval={5000} variant="dark">
          <Carousel.Item>
            <img
              style={estilo}
              className="d-block w-100 ms-5"
              src={banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={estilo}
              className="d-block w-100 mx-auto"
   
              src={banner2}
              alt="Second slide"
            />

 
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={estilo}
              className="d-block w-100 mx-auto"

              src={banner3}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
    </>
  );
}
