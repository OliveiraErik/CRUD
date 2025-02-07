import { useState , useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const EditProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const url = `http://localhost:3000/products/${id}`
    const {products, loading, error } = useFetch(url)

    const [nameUpdate, setNameUpdate] = useState("")
    const [descriptionUpdate,setDescriptionUpdate] = useState("")
    const [priceUpdate,setPriceUpdate] = useState(0)

    useEffect(() => {
        if (products) {
            setNameUpdate(products.name || "");
            setDescriptionUpdate(products.description || "");
            setPriceUpdate(products.price || 0);
        }
    }, [products])

    const httpsUpdate = async() => {
        const data = {
            name : nameUpdate,
            description : descriptionUpdate,
            price: priceUpdate
        }
        try {
            await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
        }
        navigate("/")
    }

    const handleUpdate = async(e) =>{
    e.preventDefault()

    httpsUpdate()

    setNameUpdate("")
    setDescriptionUpdate("")
    setPriceUpdate(0)

    }

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar o produto: {error}</div>;
    if (!products) return <div>Produto não encontrado!</div>;
    
  return (
    <form onSubmit={handleUpdate}>
    <div> 
    <label>
        <span>Nome:</span>
        <input 
        type="text" 
        name="name"
        placeholder="Digite o novo nome do Produto"
        onChange={(e)=>setNameUpdate(e.target.value)}
        value={nameUpdate}
        />
    </label>
    </div>
    <div>
    <label>
    <span>Preço:</span>
        <input 
        type="number" 
        name="price"
        placeholder="Digite o novo valor do Produto"
        onChange={(e)=>setPriceUpdate(e.target.value)}
        value={priceUpdate}
        />
    </label>
    </div>
    <div>
    <label >
    <span>Descrição do Produto:</span>
        <textarea  
        name="name"
        placeholder="Digite uma nova descrição para o Produto"
        onChange={(e)=>setDescriptionUpdate(e.target.value)}
        value={descriptionUpdate}
        />
    </label>
    </div>
    <button type="submit">Salvar alterações</button>
</form>
  )
}

export default EditProduct