import "./TargetItem.css"
import info from "../../../public/images/info.svg"

const TargetItem = (props) => {

    return(
        <div className="targetItem-container" onClick={props.onClick}>
            <p>{props.title}</p>
            <img src={info} alt=""/>
        </div>
    )
}

export default TargetItem