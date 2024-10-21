import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div>
        <Link to="/" className="flecha">
            <IoArrowBack size={25}/>
        </Link>
    </div>
  )
}

export default Back