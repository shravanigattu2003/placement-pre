import React from "react";


function ProductCard({name,price,onAddCart}){

    const handleClick=()=>{
        console.log(`added ${name} to cart` );
        onAddCart(name);
    }

    const card={
    border: "1px solid #ddd",
    padding: "20px",
    width: "220px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px  rgba(0,0,0,0.1)",
    textAlign: "center",
    
  
    };
    const button={
    padding: "8px 15px",
    borderRadius: "6px",
    backgroundColor: "#2b83b2",
    color: "white",
    cursor: "pointer",
    marginTop: "10px"
    }

    return(
        <div style={card}>
        <h2>{name}</h2>
        <p>price: {price}</p>
        <button style={button} onClick={handleClick}>Add to cart</button>
        </div>
    )

}
export default ProductCard;