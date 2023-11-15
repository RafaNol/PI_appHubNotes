import "./GoHome.css"
import home from "../../../public/images/home.svg"

const GoHome = (props) => {
    return(
        <div onClick={props.onClick} className="home-area-button">
            <img src={home} alt=""/>
        </div>
    )
}

export default GoHome