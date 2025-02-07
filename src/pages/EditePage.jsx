import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import EditProduct from "../components/EditProduct"
import './EditePage.css'

const EditePage = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}` 
   const {products} = useFetch(url)

  return ( 
    <div className="ContainerEditPage">
      <div className="InfosEditProduct">
        <h1 className="EditTitle">Editar Produto com ID: {products.id}</h1>
        <h1 className="InfoNameEditProduct">{products.name}</h1>
        <h2 className="InfoPriceEditProduct">R$:{products.price}</h2>
        <p className="InfoDescriptionEditProduct">{products.description}</p>
      </div>
      <div> <EditProduct /></div>
    </div>
  )
}

export default EditePage