import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import { Link } from "react-router-dom";

export default function ProductItem(props) {

return(
    <div className="pro-item border">
        <img src={props.img} style={{width:"8rem", height: "9rem"}} />
        <h5 className="text-inline">{props.name}</h5>
        <p className="text">Descripcion: {props.description}</p>
        <h5 >Precio: {" "} {formatCurrency(props.price)} </h5>
        <button className="btn btn-outline-dark"><Link to="/producto" state={{productId: props.id}} key={props.id}>Ir al producto</Link></button>

    </div>
)
    

  }

