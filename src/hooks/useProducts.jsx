import { useState, useEffect } from "react"
import { getProducts } from "../data/data.js"
import { useParams } from "react-router-dom"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategory } = useParams()

    useEffect(()=> {
      setLoading(true)

      getProducts()
        .then((data) => {
          if(idCategory){
            const filterCategory = data.filter( (product) => product.category === idCategory)
            setProducts(filterCategory)
          }else{
            setProducts(data)
          }
        })
        .finally(()=> setLoading(false))
    }, [idCategory]) 

    return {products, loading}

}

export default useProducts