import './Description.css'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import './Description.css'

const Description = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}` 
   const {products} = useFetch(url)
  return (
    <div className='DescriptionContainer'>
        <h1>Descrição ID: {products.id}</h1>
        <p className='name'>{products.name}</p>
        <p className='price'>R$: {products.price}</p>
        <p className='description'>{products.description}</p>
    </div>
  )
}

export default Description