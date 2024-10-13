import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
      <Link to={`/detail/${product.id}`} className="item" >
        <img src={product.image} className="img-item" alt="" width={100} />
        <p className="text-img">{product.name}</p>
        <p className="text-img">precio: {product.price}</p>
      </Link>  
    )
  }
  export default Item