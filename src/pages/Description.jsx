import './Description.css'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Description = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}` 
   const {products} = useFetch(url)
  return (
    <div>
        <h1>Descrição</h1>
        <h1>{products.name}</h1>
        <p>{products.price}</p>
        <p>{products.description}</p>
    </div>
  )
}

export default Description