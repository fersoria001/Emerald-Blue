import React, { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import "../../styles/productlist.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

export default function ProductsList() {
  const {product, setProduct} = useContext(ProductContext);
  const { isLoading, isError, error, data } = useProduct();
  console.log(data);
  function clickProduct(id){
    console.log(`id enviad ${id}`)
    setProduct(id);
    console.log(`product after click ${product}`)
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container-fluid">
<Carousel
        variant="dark"
        indicators={true}
        nextIcon= {<i className="bi bi-arrow-left-fill ms-auto"></i>}
        prevIcon= {<i className="bi bi-arrow-right-circle-fill me-auto"></i>}
        >
  <Carousel.Item>
  <div className="contenedor"><button className="btn" onClick={()=>clickProduct(data[0].id)}><Link to="/producto">
            <div className="columna">
              <div className="card">
                <img src={data[0].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[0].name}</h5>
                  <p className="card-text">${data[0].price}</p>
                </div>
              </div>
            </div>
            </Link>
            </button>
            <button className="btn" onClick={()=>clickProduct(data[1].id)}><Link to="/producto">
            <div className="columna">
              <div className="card">
                <img src={data[1].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[1].name}</h5>
                  <p className="card-text">${data[1].price}</p>
                </div>
              </div>
            </div>
            </Link></button>
            <button className="btn" onClick={()=>clickProduct(data[2].id)}><Link to="/producto">
            <div className="columna">
              <div className="card">
                <img src={data[2].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[2].name}</h5>
                  <p className="card-text">${data[2].price}</p>
                </div>
              </div>
            </div>
            </Link></button>
            <button className="btn" onClick={()=>clickProduct(data[3].id)}><Link to="/producto">
            <div className="columna">
              <div className="card">
                <img src={data[3].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[3].name}</h5>
                  <p className="card-text">${data[3].price}</p>
                </div>
              </div>
            </div>
            </Link></button>
            <button className="btn" onClick={()=>clickProduct(data[0].id)}><Link to="/producto">
            <div className="columna">
              <div className="card">
                <img src={data[0].img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data[0].name}</h5>
                  <p className="card-text">${data[0].price}</p>
                </div>
              </div>
            </div>
            </Link></button>
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
</div>
  );
}
