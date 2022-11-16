import "./Feature.css"
import { MdSingleBed } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"

const Feature = ({ price, title }) => {
  return (
    <div className="feature">
      <div className="feature-left">
        <div>
          <MdSingleBed className="icon" />
        </div>
        <div className="feature-details">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-price">Starting at {price}</p>
        </div>
      </div>
      <div className="feature-right">
        <AiOutlineHeart className="icon" />
      </div>
    </div>
  )
}

export default Feature
