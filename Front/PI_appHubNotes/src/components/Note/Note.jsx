import "./Note.css"
import {Link} from "react-router-dom";

const Note = (props) => {


    return(
        <div className={`note-item ${props.index % 2 === 0? "var-colorB" : "var-colorA"}`}>
            <Link to={props.to} style={{ color: 'inherit', textDecoration: 'inherit', width: '90%'}}>
                <p>{props.title && `${props.title.slice(0, 30)}${props.title.length > 100 ? '...' : ''}`}</p>
            </Link>
        </div>
    )
}

export default Note

