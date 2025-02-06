import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import EditProduct from "../components/EditProduct"

const EditePage = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}` 
   const {products} = useFetch(url)

  return ( 
    <div>
        <h1>Editar Produto com ID: {products.id}</h1>
        <h1>{products.name}</h1>
        <p>{products.price}</p>
        <p>{products.description}</p>
        <EditProduct />
    </div>
  )
}

export default EditePage