import React from "react";
import ProductCard from "./ProductCard";

function Productlayout() {

  const handleCart = (productname) =>{
    console.log(`${productname} added to cart successfully`)
  };

  const layout={
    padding : "20px",
    display : "flex",
    gap : "30px",
    justifyContent : "center",
    flexWrap : "wrap",
    color: "pink"
};
 const ProductTitle={
    textAlign: "center",
    marginTop: "20px",
    color: "green"
    
 }

  return (
    <>
    <h3 style={ProductTitle}>ProductCart list</h3>
    <div style={layout}>
    <ProductCard
      name="SmartTv"
      price={45000}
      onAddCart={handleCart}
       />

      <ProductCard
      name="fridge"
      price={35000}
      onAddCart={handleCart}/>

      <ProductCard
      name="washing-machine"
      price={50000}
      onAddCart={handleCart}/>

      <ProductCard
      name="laptop"
      price={55000}
      onAddCart={handleCart}/>
   
    </div>
    </>
  )
}
export default Productlayout