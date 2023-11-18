import "./GoHome.css"
import home from "../../../public/images/home.svg"
import {Link, Outlet} from "react-router-dom";

const GoHome = () => {
    return(
        <>
            <Outlet />
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="home-area-button">
                    <img src={home} alt=""/>
                </div>
            </Link>
        </>

    )
}

export default GoHome