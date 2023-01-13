import React from "react";
import { useProduct } from "../../hooks/useProduct";
import "../../styles/productlist.css";
import { Carousel } from "react-bootstrap";
export default function ProductsList() {
  const { isLoading, isError, error, data } = useProduct();
  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    
<Carousel
        variant="dark"
        indicators={true}>
  <Carousel.Item>
  <div className="contenedor">
            <div className="columna">
              <div className="card">
                <img src={data[0].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[0].name}</h5>
                  <p className="card-text">${data[0].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[1].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[1].name}</h5>
                  <p className="card-text">${data[1].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[2].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[2].name}</h5>
                  <p className="card-text">${data[2].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[3].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[3].name}</h5>
                  <p className="card-text">${data[3].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[0].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[0].name}</h5>
                  <p className="card-text">${data[0].price}</p>
                </div>
              </div>
            </div>
          </div>
  </Carousel.Item>

  <Carousel.Item>
  <div className="contenedor">
            <div className="columna">
              <div className="card">
                <img src={data[0].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[0].name}</h5>
                  <p className="card-text">${data[0].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[1].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[1].name}</h5>
                  <p className="card-text">${data[1].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[2].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[2].name}</h5>
                  <p className="card-text">${data[2].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[3].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[3].name}</h5>
                  <p className="card-text">${data[3].price}</p>
                </div>
              </div>
            </div>
            <div className="columna">
              <div className="card">
                <img src={data[0].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[0].name}</h5>
                  <p className="card-text">${data[0].price}</p>
                </div>
              </div>
            </div>
          </div>
  </Carousel.Item>
</Carousel>
  );
}
