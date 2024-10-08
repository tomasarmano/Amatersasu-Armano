import { ClockLoader } from "react-spinners"
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading-screen">
        <ClockLoader size={50} color="black" />
    </div>
  )
}

export default Loading