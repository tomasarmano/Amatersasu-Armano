import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <GrCart size={30} />
      <p className="number">0</p>
    </div>
  )
}

export default CartWidget