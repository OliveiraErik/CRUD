import { useState } from "react"

const NewProduct = () => {
    const url = "http://localhost:3000/products"

    const [name, setName] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState(0)

    const handleSubmit = async(e) =>{
        e.preventDefault()

        httpRequest()

        setName("")
        setPrice(0)
        setDescription("")
    }

    const httpRequest = async()=>{
        const data = {
            "name" : name,
            "description": description,
            "price" : price
        }
        const config = ({
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })  
        const res = await fetch(url, config)
        return (
            res.json()
        )
    }
  return (
    <form onSubmit={handleSubmit}>
        <div> 
        <label>
            <span>Nome:</span>
            <input 
            type="text" 
            name="name"
            placeholder="Digite o nome do Produto"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
        </label>
        </div>
        <div>
        <label>
        <span>Preço:</span>
            <input 
            type="number" 
            name="price"
            placeholder="Digite o valor do Produto"
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
            />
        </label>
        </div>
        <div>
        <label >
        <span>Descrição do Produto:</span>
            <textarea  
            name="name"
            placeholder="Digite uma descrição para o Produto"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            />
        </label>
        </div>
        <button type="submit">Criar</button>
    </form>
  )
}

export default NewProduct