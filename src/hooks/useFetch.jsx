import { useState, useEffect } from "react"

const useFetch = (url) => {
      const [products,setProducts] = useState([])
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      
      useEffect(()=>{
          const getAllProducts = async()=>{
            try {
              setLoading(true);
              setError(null);
              const res = await fetch(url)
              const json = await res.json()
              setProducts(json)
            } catch (error) {
              setError(error.message);
            }
            setLoading(false);
          }
          getAllProducts()
      },[url])
  return {products,loading, error,setProducts }
}

export default useFetch