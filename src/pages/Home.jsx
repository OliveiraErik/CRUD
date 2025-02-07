//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import useFetch from "../hooks/useFetch"

const Home = () => {
  const url = "http://localhost:3000/products"
  const {products , setProducts} = useFetch(url)

  const handleDelete = async(id)=>{
    await fetch(`http://localhost:3000/products/${id}`,{method:"DELETE"})
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  }

  return (
    <>
    <div className="Container">
    <h1>Produtos</h1>
    <div className="cardContainer">
    {products && products.map((product)=>(
      <div key={product.id} className="ProductContainer">
        <p className="NameProduct">{product.name}</p>
        <p className="PriceProduct">R${product.price}</p>
          <Link to={`/products/${product.id}/description`} className="Link">
          Descrição
          </Link>
          <div className="actions">
          <Link to={`/products/${product.id}`}>
            <img className="icons" src="/edit.png"/>
            </Link>
        <button onClick={()=> handleDelete(product.id)}>
          <img id="deleteIcon" className="icons" src="/excluir.png"/>
          </button>
          </div>
      </div>
    )
    )}
    </div>
    </div>
    </>
  )
}

export default Home